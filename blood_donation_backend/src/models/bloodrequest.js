'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bloodrequest = sequelize.define('Bloodrequest', {
    dateOfRequest: {
      type: DataTypes.DATE,
      allowNull: true
    },
    blood_group: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numOfBags: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
  Bloodrequest.associate = function(models){
    Bloodrequest.hasMany(models.Bloodissued, {
    as: 'blood_issued',
    foreignKey: 'blood_request_id'
    });  
    
    Bloodrequest.belongsTo(models.User, {
      as: 'Donor',
      foreignKey: 'donorId'
    });

    Bloodrequest.belongsTo(models.User, {
      as: 'Recipient',
      foreignKey: 'recipientId'
    });
   
  }
  return Bloodrequest;
};