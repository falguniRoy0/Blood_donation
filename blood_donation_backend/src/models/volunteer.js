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
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    confirmpassword: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
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