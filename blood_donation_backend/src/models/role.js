
  'use strict';
  module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING
    }
  });
  Role.associate = function(models){
    Role.belongsToMany(models.User, {
      through: 'Userrole',
      as: 'users',
      foreignKey: 'roleId' 
     });
  };
  return Role;
};