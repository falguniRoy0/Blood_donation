'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToD = sequelize.define('ToD', {
    name: {
      type: DataTypes.STRING
    }
  });
  ToD.associate = function(models){
    ToD.belongsToMany(models.Donor, {
      through: 'DonorToD',
      as: 'donors',
      foreignKey: 'ToDId' 
     });
    };
  return ToD;
};