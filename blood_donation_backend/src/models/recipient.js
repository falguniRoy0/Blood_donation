'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipient = sequelize.define('Recipient', {
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
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
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
  })
  Recipient.associate = function(models){
    // Recipient.belongsTo(models.User, {
    //   as: 'reciever',
    //   foreignKey: 'userId'
    // });

    Recipient.belongsTo(models.Bloodgroup, {
      as: 'Recipient',
      foreignKey: 'bloodGroupId'
     });

     Recipient.hasMany(models.Bloodrequest, {
      as: 'blood_request',
      foreignKey: 'recipient_id'
     }); 
  }
  return Recipient;
};