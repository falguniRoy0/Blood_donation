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
        allowNull: true
      },
      // bloodtype: {
      //   type: DataTypes.STRING,
      //   allowNull: true
      // },
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
        allowNull: true,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      confirmpassword: {
        type: DataTypes.STRING,
        allowNull: true
      },
      // zipcode: {
      //   type: DataTypes.STRING,
      //   allowNull: true
      // },
      dateofbirth: {
        type: DataTypes.DATE,
        allowNull: true
      },
      // bloodgroup: {
      //   type: DataTypes.STRING,
      //   allowNull: true
      // },
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

    User.belongsToMany(models.Role, {
      through: 'UserRole',
      foreignKey : {
        name: 'userId',
        allowNull: false
      },
      as: 'roles'
    });

    // User.hasOne(models.Recipient, {
    //   as: 'reciever',
    //   foreignKey: 'userId'
    // });

    // User.hasOne(models.Bloodcollection, {
    //   as: 'bloodCollection',
    //   foreignKey: 'userId'
    // });

    User.hasOne(models.Bloodrequest, {
      as: 'bloodRequest',
      foreignKey: 'userId'
    });

    User.hasOne(models.Bloodissued, {
      as: 'bloodIssued',
      foreignKey: 'userId'
    });

    User.hasOne(models.ToD, {
      as: 'tods',
      foreignKey: 'userId'
    });

    User.hasOne(models.donorQuery, {
      as: 'donorQueries',
      foreignKey: 'userId'
    });

    User.hasOne(models.Bloodgroup, {
      as: 'bloodGroups',
      foreignKey: 'userId'
    });
  };
  return User;
};
