'use strict';

var path = require('path');
var _ = require('lodash');

// All Generics Configurations
// ============================================
var config = {
  env: process.env.NODE_ENV || 'development',
  root: path.normalize(__dirname + '/../../../'),
  resources: {
    route: path.normalize(__dirname + '/../../../server/api/route'),
    controller: path.normalize(__dirname + '/../../../server/api/controller'),
    service: path.normalize(__dirname + '/../../../server/api/service'),
    repository: path.normalize(__dirname + '/../../../server/api/repository'),
    model: path.normalize(__dirname + '/../../../server/api/model'),
    auth: path.normalize(__dirname + '/../../../server/auth'),
    security: path.normalize(__dirname + '/../../../server/security'),
    errors: path.normalize(__dirname + '/../../../server/error')
  },
  ip: process.env.IP || '127.0.0.1',
  port: process.env.PORT || 3000,
  secrets: 'supersecret'
};

module.exports = _.merge(config, require('./' + process.env.NODE_ENV + '.js') || {});