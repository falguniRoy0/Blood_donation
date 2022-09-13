'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bloodcollection = sequelize.define('Bloodcollection', {
  hospitalName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numOfBags: {
  type: DataTypes.FLOAT,
  allowNull: false
  },
  dateOfCollection: {
    type: DataTypes.DATE,
  },
  nurse_doctorInCharge: {
    type: DataTypes.STRING,
    allowNull: false
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true
  }
  })
  Bloodcollection.associate = function(models){
    Bloodcollection.belongsTo(models.Donor, {
      as: 'blood_collection',
      foreignKey: 'donor_id'
    });

    Bloodcollection.belongsTo(models.User, {
      as: 'bloodCollection',
      foreignKey: 'userId'
    });
  }
  return Bloodcollection;
};