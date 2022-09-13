'use strict';
module.exports = (sequelize, DataTypes) => {
const Usergroup = sequelize.define('Usergroup', {
  groupname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
  })
  Usergroup.associate = function(models){
    //define association
  }
  return Usergroup;
};