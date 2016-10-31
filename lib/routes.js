'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var stormpath = require('express-stormpath');

/**
 * Create an Express Router, to contain our custom routes.
 */
var router = express.Router();


/**
 * Define the route for our homepage.
 */
router.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});


/*
* User Page
*/
router.get('/user', stormpath.getUser, function(req, res) {
  res.render('user', {
    title: 'Welcome'
  });
});


/*
* 404 Page
*/
// router.use(function(req, res, next) {
//   res.status(404).send('Sorry cant find that!');
// });



/**
 * When someone visits /profile, render the profile form.
 */
router.use('/profile',stormpath.loginRequired,require('./../profile')());

module.exports = router;