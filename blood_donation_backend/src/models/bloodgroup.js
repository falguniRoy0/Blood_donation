'use strict';
module.exports = (sequelize, DataTypes) => {
const Bloodgroup = sequelize.define('Bloodgroup', {
  bloodGroup: {
    type: DataTypes.STRING,
    allowNull: false
  },
  })
  Bloodgroup.associate = function(models){
    Bloodgroup.hasMany(models.Donor, {
      as: 'Donor',
      foreignKey: 'bloodGroupId'
     });

     Bloodgroup.hasMany(models.Recipient, {
      as: 'Recipient',
      foreignKey: 'bloodGroupId'
     });
  }
  return Bloodgroup;
};