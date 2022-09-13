'use strict';
module.exports = (sequelize, DataTypes) => {
const Volunteer = sequelize.define('Volunteer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    remarks: {
    type: DataTypes.STRING,
    allowNull: true
  }
  });
  Volunteer.associate = function(models){
    Volunteer.belongsTo(models.User, {
      as: 'volunteer',
      foreignKey: 'userId'
    });
  }
  return Volunteer;
};