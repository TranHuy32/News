var express = require('express');
var router = express.Router();
var JobController = require('../controllers/jobs.controller')
const permission = require('../middleware/permission')

// LIST

router.get('/', permission, JobController.getJob)
module.exports = router;

//ADD

router.get('/add',permission, JobController.getAddJob)
router.post('/add',permission,  JobController.postAddJob)
module.exports = router;

// // DELETE
router.get('/delete/:job_id',permission, JobController.getDeleteJob)
module.exports = router;


// // UPDATE
router.get('/edit/:job_id',permission, JobController.getUpdateJob)
router.post('/edit',permission, JobController.postUpdateJob)
module.exports = router;
