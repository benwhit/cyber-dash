'use strict';

var express = require('express');
var stormpath = require('express-stormpath');

var routes = require('./lib/routes');


/**
 * Create the Express application.
 */
var app = express();


/**
 * Application settings.
 */
app.set('views', './lib/views');
app.set('view engine', 'jade');

/*
* Serve Static files: CSS, JS, Images
*/
app.use(express.static('public'));


/**
 * Stormpath initialization.
 */
app.use(stormpath.init(app, {
  expand: {
    customData: true
  },
  website: true,
  web: {
    login: {
      enabled: true,
      nextUri: "/user"
    }
  }
}));


/**
 * Route initialization.
 */
app.use('/', routes);


/**
 * Start the web server.
 */
app.on('stormpath.ready',function(){
  	console.log('Stormpath Ready');
	app.listen(process.env.PORT || 3000);
});

