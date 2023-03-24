var job = require('../models/job');

exports.getJobs = async function (req, res, next) {
    try {
        const jobList = await job.findAll({});
        return jobList
    } catch (err) {
        // Log Errors
        console.error(err);
        throw err;
    }
}
exports.addJobs = async function (job_id, job_title) {
    try {
        const newJob = await job.create({
            id,
            name,
            email,
            job_id
        });
        return newEmployee
    } catch (err) {
        console.error(err);
        throw err;

    }
}

exports.deleteEmployees = async function (req, res) {
    try {
        const destroyList = await employee.destroy({
            where: {
                id: req.params.id
            }
        })
        return destroyList
    } catch (err) {
        console.error(err);
        throw err;

    }
}