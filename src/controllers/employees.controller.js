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
        var jobList = await JobService.getJobs()

        res.render('employeeList', { employeeList, jobList });
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
        res.status(201).json(newEmployee)

        // res.redirect('/employee');
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
        const employeeEdit = await EmployeeService.editEmployees(id)
        res.render('employee/edit', { employeeEdit });
    } catch (err) {
        console.log(err);
    }
};

exports.postUpdateEmployee = async function (req, res, next) {
    try {
        let { id, name, email, job_id } = req.body;
        const employeeUpdate = await EmployeeService.updateEmployees(id, name, email, job_id)

        res.redirect('/employee')

    } catch (err) {
        console.log(err)
    }
}


