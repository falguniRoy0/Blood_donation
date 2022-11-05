'use strict';
module.exports = (sequelize, DataTypes) => {
  const Donor = sequelize.define('Donor', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
  Donor.associate = function(models){
    // Donor.belongsTo(models.User, {
    //   as: 'donor',
    //   foreignKey: 'userId'
    // });

    // Donor.belongsTo(models.Bloodrequest, {
    //   as: 'Donor',
    //   foreignKey: 'reqId'
    //  });

    // Donor.belongsTo(models.Bloodgroup, {
    //   as: 'Donor',
    //   foreignKey: 'bloodGroupId'
    //  });

    // Donor.hasMany(models.Bloodcollection, {
    //   as: 'blood_collection',
    //   foreignKey: 'donor_id'
    //  });
  }
  return Donor;
};