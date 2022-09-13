'use strict';
module.exports = (sequelize, DataTypes) => {
  const DonorToD = sequelize.define('DonorToD', {
    donorId: {
      type: DataTypes.INTEGER,
    },
    ToDId: {
      type: DataTypes.INTEGER
    }
  });
  DonorToD.associate = function(models){
   //define association
    };
  return DonorToD;
};