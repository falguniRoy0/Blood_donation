'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      usertype: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bloodtype: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phonenumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      confirmpassword: {
        type: DataTypes.STRING,
        allowNull: false
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateofbirth: {
        type: DataTypes.DATE,
        allowNull: false
      },
      bloodgroup: {
        type: DataTypes.STRING,
        allowNull: true
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['confirmpassword']
        }
      }
    }
  );

  User.associate = function (models) {

    User.hasOne(models.Donor, {
      as: 'donor',
      foreignKey: 'userId'
    });

    User.hasOne(models.Recipient, {
      as: 'reciever',
      foreignKey: 'userId'
    });

    User.hasOne(models.Volunteer, {
      as: 'volunteer',
      foreignKey: 'userId'
    });

    User.hasOne(models.Bloodcollection, {
      as: 'bloodCollection',
      foreignKey: 'userId'
    });

    User.hasOne(models.Bloodrequest, {
      as: 'bloodRequest',
      foreignKey: 'userId'
    });

    User.hasOne(models.Bloodissued, {
      as: 'bloodIssued',
      foreignKey: 'userId'
    });
  };
  return User;
};
