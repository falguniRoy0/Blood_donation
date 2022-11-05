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
    // amountPerBag: {
    //   type: DataTypes.FLOAT,
    //   allowNull: false
    // },
    // requestStatus: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true
    // },
    // remarks: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // }
  })
  Bloodrequest.associate = function(models){
    // Bloodrequest.hasOne(models.Recipient, {
    //   as: 'Recipient',
    //   foreignKey: 'reqId'
    // });
   
    // Bloodrequest.hasOne(models.Donor, {
    //   as: 'Donor',
    //   foreignKey: 'reqId'
    // });

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