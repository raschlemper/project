'use strict';

var config = require('../../config/environment');
var clientService = require(config.resources.service + '/clientService');

module.exports = (function () {

  /**
   * Retorna um array de cliente a partir do id da view atribuida
   */
  var findAll = function (req, res, next) {
    clientService.findAll().then(function (clients) {
      res.send(clients);
    }, function(err) {
      next(err);
    });
  };

  /**
   * Retorna um cliente a partir de seu id.
   */
  var findById = function (req, res, next) {
    clientService.findById(req.params.id).then(function (client) {
      res.send(client);
    }, function(err) {
      next(err);
    });
  };

  /**
   * Persiste um novo cliente
   */
  var save = function (req, res, next) {
    clientService.save(req.body).then(function (save) {
      res.send(200);
    }, function(err) {
      next(err);
    });
  };

  /**
   * Atualiza um cliente a partir de seu id
   */
  var update = function (req, res, next) {
    clientService.update(req.params.id, req.body).then(function (update) {
      res.status(200);
    }, function(err) {
      next(err);
    });
  };

  /**
   * Devara um cliente a partir de seu id
   */
  var remove = function (req, res, next) {
    clientService.remove(req.params.id).then(function (del) {
      res.send(200);
    }, function(err) {
      next(err);
    });
  };

  return {
    findAll: findAll,
    findById: findById,
    save: save,
    update: update,
    remove: remove
  };

})();