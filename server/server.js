'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var http = require('http');
var config = require('./config/mongodb');
var config = require('./config/environment');

/**
 * Server Configs
 */
var app = express();
var server = http.createServer(app);

require('./config/express')(app);
require('./routes')(app);

server.listen(config.port, config.ip, function () {
	console.log('Vision listening on http://%s:%d, in %s mode', config.ip, config.port, app.get('env'));
});

exports = module.exports = app;