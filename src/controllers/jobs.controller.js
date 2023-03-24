var express = require('express');
var router = express.Router();
var db = require('../config/database');
var employee = require('../models/employee');
var job = require('../models/job');
var EmployeeService = require('../services/employees.service')
var JobService = require('../services/jobs.service')
// LIST


exports.getJob = async function (req, res, next) {
    try {
        var jobList = await JobService.getJobs()

        res.render('jobList', { jobList });
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });
    }
};
//ADD

exports.getAddJob = async function (req, res, next) {
    try {
        var jobList = await JobService.getJobs()
        res.render('job/add', { jobList })
    } catch (err) {
        console.log(err);
    }

}
exports.postAddJob = async function (req, res, next) {
    try {
        let { job_id, job_title } = req.body;
        const newJob = await JobService.addJobs(job_id, job_title)
        res.redirect('/job');
    } catch (err) {
        console.log(err);
    }
}


// DELETE
exports.getDeleteJob = async function (req, res, next) {
    try {
        const job_id = req.params.job_id
        const destroyList = await JobService.deleteJobs(job_id)
        res.redirect('/employee');
    } catch (err) {
        console.log(err);
    }
}



// UPDATE

exports.getUpdateJob = async function (req, res, next) {
    try {
        const job_id = req.params.job_id
        console.log(req.params.job_id)
        const jobEdit = await JobService.editJobs(job_id)
        res.render('job/edit', { jobEdit });
    } catch (err) {
        console.log(err);
    }
};

exports.postUpdateJob = async function (req, res, next) {
    try {
        let { job_id, job_title } = req.body;
        const jobUpdate = await JobService.updateJobs(job_id, job_title)

        res.redirect('/job')

    } catch (err) {
        console.log(err)
    }
}
