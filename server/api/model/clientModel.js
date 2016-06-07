'use strict'

module.exports = function (sequelize, DataTypes) {
  var Client = sequelize.define('Client', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING },
    data: { type: DataTypes.JSON }
  }, {
    timestamps: false,
    tableName: 'client',
    schema: 'vision',
    underscored: true,
    freezeTableName: true,
    charset: 'utf8',
  });

  sequelize.View.hasOne(Client);
  sequelize.Datasource.hasOne(Client);

  Client.belongsTo(sequelize.View);
  Client.belongsTo(sequelize.Datasource);

  return Client;
};
Status API Training Shop Blog About
