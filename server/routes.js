'use strict';

var config = require('./config/environment');
var errorHandler = require(config.resources.errors + '/errorHandler');

module.exports = function (app) {

  app.use('/api/client', require('./api/routes/clientRoute'));

  // Tratamento dos erros
  app.use(errorHandler);

  app.route('/*').get(function (req, res) {
    res.sendFile(app.get('appPath') + '/index.html');
  });
};