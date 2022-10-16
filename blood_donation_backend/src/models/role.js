'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })
  Role.associate = function(models){
    Role.belongsToMany(models.User, {
      through: 'UserRole',
      foreignKey : {
        name: 'roleId',
        allowNull: false
      },
      as: 'users'
    });
  }
  return Role;
};