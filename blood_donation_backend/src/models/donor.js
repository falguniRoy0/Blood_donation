'use strict';
module.exports = (sequelize, DataTypes) => {
  const Donor = sequelize.define('Donor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
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