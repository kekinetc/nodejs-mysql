
const db = require('../models/database');

module.exports = class Employee {
    constructor(fullname, email, city, mobile) {
      this.fullname = fullname;
      this.email= email;
      this.city = city;
      this.mobile = mobile;
      
    }
  
    save() {
      return db.execute(
        'INSERT INTO employee (fullname, email, city, mobile) VALUES (?, ?, ?, ?)',
        [this.fullname, this.email, this.city, this.mobile]
      );
    }
  
    static deleteById(id) {}
  
    static fetchAll() {
      return db.execute('SELECT * FROM employee');
    }
  
    static findById(id) {}
  };