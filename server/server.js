'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var db = require('./config/sequelize');

/**
 * Server Configs
 */
var app = express();
var server = require('http').createServer(app);

require('./config/express')(app);
require('./routes')(app);

db.sync().then(function () {
  server.listen(config.port, config.ip, function () {
    console.log('Vision listening on http://%s:%d, in %s mode', config.ip, config.port, app.get('env'));
  });
}).catch(function (err) {
    console.log('Server failed to start due to error: %s', err);
});

exports = module.exports = app;