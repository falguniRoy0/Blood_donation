'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bloodrequest = sequelize.define('Bloodrequest', {
    dateOfRequest: {
      type: DataTypes.DATE,
      allowNull: false
    },
    blood_group: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numOfBags: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    amountPerBag: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: false
    },
    requestStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
  Bloodrequest.associate = function(models){
    Bloodrequest.belongsTo(models.Recipient, {
      as: 'blood_request',
      foreignKey: 'recipient_id'
    });
   
    Bloodrequest.hasMany(models.Bloodissued, {
    as: 'blood_issued',
    foreignKey: 'blood_request_id'
    });  
    
    Bloodrequest.belongsTo(models.User, {
      as: 'bloodRequest',
      foreignKey: 'userId'
    });
   
  }
  return Bloodrequest;
};