'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToD = sequelize.define('ToD', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  ToD.associate = function(models){
    ToD.belongsTo(models.User, {
      as: 'tods',
      foreignKey: 'userId' 
     });
    };
  return ToD;
};