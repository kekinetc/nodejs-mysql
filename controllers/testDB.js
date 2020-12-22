const express = require('express');
var router = express.Router();
const db = require('../models/database')
//let EmployeeModel= require('../models/employee.model');


router.get('/', (req, res) => {
    db.execute('SELECT * From employee')
    .then(result => {
        console.log(result);
        //res.render(result);
    })
    .catch(err =>{
        console.log(err);
    });

    
});


module.exports = router;