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
      // define association here
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