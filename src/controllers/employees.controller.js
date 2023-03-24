var express = require('express');
var router = express.Router();
var db = require('../config/database');
var employee = require('../models/employee');
var job = require('../models/job');
var EmployeeService = require('../services/employees.service')
var JobService = require('../services/jobs.service')
// LIST


exports.getEmployee = async function (req, res, next) {
    try {
        var employeeList = await EmployeeService.getEmployees()
        res.render('employeeList', { employeeList });
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });
    }
};
//ADD

exports.getAddEmployee = async function (req, res, next) {
    try {
        var jobList = await JobService.getJobs()
        res.render('employee/add', { jobList })
    } catch (err) {
        console.log(err);
    }

}
exports.postAddEmployee = async function (req, res, next) {
    try {
        let { id, name, email, job_id } = req.body;
        const newEmployee = await EmployeeService.addEmployees(id, name, email, job_id)
        res.redirect('/employee');
    } catch (err) {
        console.log(err);
    }
}


// DELETE
exports.getDeleteEmployee = async function (req, res, next) {
    try {
        const id = req.params.id
        const destroyList = await EmployeeService.deleteEmployees(id)
        res.redirect('/employee');
    } catch (err) {
        console.log(err);
    }
}



// UPDATE

exports.getUpdateEmployee = async function (req, res, next) {
    try {
        const id = req.params.id
        res.render('employee/edit', { employeeEdit });
    } catch (err) {
        console.log(err);
    }
};


router.post('/edit', async (req, res) => {
    try {
        let { employee_id, employee_title } = req.body;
        console.log(employee_id)
        await employee.update({
            employee_id,
            employee_title
        },
            {
                where: {
                    employee_id: employee_id
                }
            })
        res.redirect('/employee')
    } catch (err) {
        console.log(err)
    }

// });

// module.exports = router;
