'use strict';

var config = require('../../config/environment');
var repository = require(config.resources.repositories + '/clientRepository');
var sequelize = require("../../config/sequelize");

module.exports = (function () {

  var findAll = function (id) {
    return repository.findAllByView(id);
  };

  var findById = function (id) {
    return repository.findById(id);
  };

  var save = function (client) {
    return repository.save(client);
  };

  var update = function (id, client) {
    return repository.update(client);
  };

  var saveOrUpdate = function (client) {
    if (!client.id) {
      return save(client).then(function (result) {
        return result;
      });
    } else {
      return update(client.id, client).then(function (result) {
        return result;
      });
    }
  }

  var remove = function (id) {
    return repository.remove(id);
  };

  return {
    findAll: findAll,
    findById: findById,
    save: save,
    update: update,
    saveOrUpdate: saveOrUpdate,
    remove: remove
  }

})();