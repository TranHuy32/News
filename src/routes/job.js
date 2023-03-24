var express = require('express');
var router = express.Router();
var JobController = require('../controllers/jobs.controller')

// LIST

router.get('/', JobController.getJob)
module.exports = router;

//ADD

router.get('/add', JobController.getAddJob)
router.post('/add', JobController.postAddJob)
module.exports = router;
// // DELETE
router.get('/delete/:job_id', JobController.getDeleteJob)

// // UPDATE
router.get('/edit/:job_id', JobController.getUpdateJob)
router.post('/edit', JobController.postUpdateJob)
module.exports = router;
