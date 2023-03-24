var express = require('express');
var router = express.Router();
var db = require('../config/database');
var job = require('../models/job');

// LIST

router.get('/', async (req, res) => {
    try {
        const jobList = await job.findAll();
        console.log(jobList)
        res.render('jobList', { jobList });
    } catch (err) {
        console.log(err);
    }
});

// ADD
router.get('/add', (req, res) =>
    res.render('job/add')
);

router.post('/add', async (req, res) => {
    try {
        let { job_id, job_title } = req.body;
        // Insert into Table
        const newJob = await job.create({
            job_id,
            job_title
        });
        res.redirect('/job');
    } catch (err) {
        console.log(err);
    }
});
// 
module.exports = router;


// DELETE

router.get('/delete/:id', async (req, res) => {
    try {
        const destroyList = await job.destroy({
            where: {
                job_id: req.params.id
            }
        })
        res.redirect('/job')

    } catch (err) {
        console.log(err);
    }
});


// UPDATE

router.get('/edit/:id', async (req, res) => {
    try {
        const jobEdit = await job.findOne({
            where: {
                job_id: req.params.id
            }
        });
        res.render('job/edit', {
            jobEdit
        });
    } catch (err) {
        console.log(err);
    }
});


router.post('/edit', async (req, res) => {
    try {
        let { job_id, job_title } = req.body;
        await job.update({
            job_id,
            job_title
        },
            {
                where: {
                    job_id: job_id
                }
            })
        res.redirect('/job')
    } catch (err) {
        console.log(err)
    }

});

module.exports = router;
