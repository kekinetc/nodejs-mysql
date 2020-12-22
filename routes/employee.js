const path = require('path');

const express = require('express');

const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.get('/', employeeController.getAddEmployee);

router.post('/', employeeController.postAddEmployee);

router.get('/list', employeeController.getEmployees);

module.exports = router;