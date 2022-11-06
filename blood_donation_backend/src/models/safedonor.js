'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SafeDonor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SafeDonor.belongsTo(models.User, {
        as: 'safeDonor',
        foreignKey: 'userId'
      });
    }
  };
  SafeDonor.init({
    name: DataTypes.STRING,
    bloodGroup: DataTypes.STRING,
    donationType: DataTypes.STRING,
    city: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SafeDonor',
  });
  return SafeDonor;
};