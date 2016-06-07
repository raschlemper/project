'use strict';

var sequelize = require('../../config/sequelize');

module.exports = (function () {

  /**
  * Retorna todos os Client
  **/
  var findAll = function (viewId) {
    return sequelize.Client.findAll({
      attributes: [
        'id',
        'type',
        'data',
        ['datasource_id', 'datasourceId'],
        ['view_id', 'viewId']
      ],
      where: {
        view_id: viewId
      },
      raw: true
    });
  };

  /**
  * Retorna um Client a partir de um hash
  **/
  var findById = function (ClientId) {
    return sequelize.Client.find({
      attributes: [
        'id',
        'type',
        'data',
        ['datasource_id', 'datasourceId'],
        ['view_id', 'viewId']
      ],
      where: {
        id: ClientId
      },
      raw: true
    });
  };

  /**
  * Persiste um novo Client
  **/
  var save = function (Client, t) {
    return sequelize.Client.create({
      type: Client.type,
      data: Client.data,
      view_id: Client.viewId,
      datasource_id: Client.datasourceId || null
    }, { transaction: t });
  };

  /**
  * Atualiza um Client a partir de seu hash
  **/
  var update = function(Client, t) {
    return sequelize.Client.find({
      where: {
        id: Client.id
      }
    }, { transaction: t }).then(function (ClientUpdate) {
      if (ClientUpdate) {
        return ClientUpdate.updateAttributes({
          type: Client.type,
          data: Client.data,
          view_id: Client.viewId,
          datasource_id: Client.datasourceId || null
        }, { transaction: t });
      };
    });
  };

  /**
  * Remove um Client a partir de seu hash
  **/
  var remove = function (id, t) {
    return sequelize.Client.destroy({
      where: {
        id: id
      }
    }, { transaction: t });
  };

  return {
    findAll: findAll,
    findById: findById,
    save: save,
    update: update,
    remove: remove
  }

})();