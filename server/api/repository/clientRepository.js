'use strict';

var config = require('../../config/environment');
var compose = require('composable-middleware');
var _ = require('underscore');
var Client = require(config.resources.model + '/clientModel');

module.exports = (function () {

  /**
  * Retorna todos os Client
  **/
  var findAll = function (req, res, next) {
    Client.find({}, function(err, clients) {
        if (err) return res.send(500, err);
        res.json(200, clients);
    });
  };

  /**
  * Retorna um Client a partir de um hash
  **/
  var findById = function (req, res, next) {
    var clientId = req.client._id;
    Client.findById(userId, function(err, client) {
        if (err) return res.send(500, err);
        if (!client) return res.send(401);
        res.send(200, client);
    });
  };

  /**
  * Persiste um novo Client
  **/
  var save = function (req, res, next) {
    var newClient = new Client(req.body);
    newClient.save(function(err, client) {
        if (err) return res.send(500, err);
        res.json(200);
    });
  };

  /**
  * Atualiza um Client a partir de seu hash
  **/
  var update = function(req, res, next) {
    Client.findByIdAndUpdate(req.body._id, req.body, function(err, client) {
      if(err) return res.send(500, err);
      res.json(200);
    });
  };

  /**
  * Remove um Client a partir de seu hash
  **/
  var remove = function (req, res, next) {
    Client.findByIdAndRemove(req.params.id, function(err, client) {
        if (err) return res.send(500, err);
        return res.send(204);
    });
  };

  return {
    findAll: findAll,
    findById: findById,
    save: save,
    update: update,
    remove: remove
  }

})();