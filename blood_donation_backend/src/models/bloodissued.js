'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bloodissued = sequelize.define('Bloodissued', {
    issued_by: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    issued_to: {
      type: DataTypes.STRING,
      allowNull: false
    },
    issuedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    amount_paid: {
      type: DataTypes.FLOAT,
    }
  })
  Bloodissued.associate = function(models){
    // Bloodissued.belongsTo(models.Bloodrequest, {
    //   as: 'blood_issued',
    //   foreignKey: 'blood_request_id'
    // });

    // Bloodissued.belongsTo(models.User, {
    //   as: 'bloodIssued',
    //   foreignKey: 'userId'
    // });
  }
  return Bloodissued;
};