// import modules
const express = require('express');

// import index controller object for index controller methods
const indexController = require('../controller/index_controller');

// import passport
const passport = require('passport');
const passportSetup = require('../middleware/passport')

// get express router
const router = express.Router();

// route for logging in user to application
router.post('/login', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/login/callback', passport.authenticate('google', { failureRedirect: '/failed' }), indexController.postLogin);

// export index routes
module.exports = router;