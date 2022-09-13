'use strict';
module.exports = (sequelize, DataTypes) => {
  const Userrole = sequelize.define('Userroles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    },
    roleId: {
      type: DataTypes.INTEGER
    }
  })
  Userrole.associate = function(models){
    //define association
  }
  return Userrole;
};