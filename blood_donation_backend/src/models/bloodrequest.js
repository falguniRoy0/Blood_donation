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
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    donorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  Bloodrequest.associate = function(models){
    // Bloodrequest.belongsTo(models.Bloodissued, {
    // as: 'blood_issued',
    // foreignKey: 'blood_request_id'
    // });  
    
    Bloodrequest.belongsTo(models.User, {
      as: 'donor',
      foreignKey: 'donorId'
    });

    Bloodrequest.belongsTo(models.User, {
      as: 'recipient',
      foreignKey: 'recipientId'
    });
   
  }
  return Bloodrequest;
};