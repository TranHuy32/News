var express = require('express');
var router = express.Router();
var EmployeeController = require('../controllers/employees.controller')
// LIST

router.get('/', EmployeeController.getEmployee)
module.exports = router;

//ADD

router.get('/add', EmployeeController.getAddEmployee)
router.post('/add', EmployeeController.postAddEmployee)
module.exports = router;
// // DELETE
router.get('/delete/:id', EmployeeController.getDeleteEmployee)

// // UPDATE
router.get('/edit/:id', EmployeeController.getUpdateEmployee)
router.post('/edit', EmployeeController.postUpdateEmployee)
module.exports = router;
