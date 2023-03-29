var express = require('express');
var router = express.Router();
var UserController = require('../controllers/users.controller')


/* GET login page. */
router.post('/signup', UserController.postSignUp)
router.post('/signin', UserController.postSignIn)
router.get('/secret', UserController.getSecret)


module.exports = router;
