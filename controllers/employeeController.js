const Employee = require('../models/employee.model');



exports.getAddEmployee = (req, res, next) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    });
  };
exports.getEmployees = (req, res, next) => {
    Employee.fetchAll()
      .then(([rows, fieldData]) => {
        res.render('employee/list', {
          list: rows,
          viewTitle: "Fetched the List of Employees",
         });
      })
      .catch(err => console.log(err));
  };

  exports.postAddEmployee = (req, res, next) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const city = req.body.city;
    const mobile = req.body.mobile;
    const employee = new Employee(fullname, email, city, mobile);
    employee
    .save()
    .then(() => {
        res.redirect('employee/list');
      })
    .catch(err => console.log(err));
  };