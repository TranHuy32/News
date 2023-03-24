var job = require('../models/job');

exports.getJobs = async function (req, res, next) {
    try {
        const jobList = await job.findAll({});
        return jobList
    } catch (err) {

        console.error(err);
        throw err;
    }
}
exports.addJobs = async function (job_id, job_title) {
    try {
        const newJob = await job.create({
            job_id,
            job_title
        });
        return newJob
    } catch (err) {
        console.error(err);
        throw err;

    }
}

exports.deleteJobs = async function (job_id) {
    try {
        const destroyList = await job.destroy({
            where: {
                job_id
            }
        })
        return destroyList
    } catch (err) {
        console.error(err);
        throw err;

    }
}

exports.editJobs = async function (job_id) {
    try {
        const jobEdit = await job.findOne({
            where: {
                job_id
            }
        });
        return jobEdit
    } catch (err) {
        console.error(err);
        throw err;

    }
}

exports.updateJobs = async function (job_id, job_title) {

    try {
        const jobUpdate = await job.update({
            job_id,
            job_title

        }, {
            where: {
                job_id
            }
        });
        return jobUpdate
    } catch (err) {
        console.error(err);
        throw err;
    }
}