'use strict';
module.exports = (sequelize, DataTypes) => {
  const donorQuery = sequelize.define('donorQuery', {
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    healthIssue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    donateBefore: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })
  donorQuery.associate = function(models){
    //define association
  }
  return donorQuery;
};