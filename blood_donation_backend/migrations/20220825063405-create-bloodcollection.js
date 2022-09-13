'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bloodcollections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hospitalName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numOfBags: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      dateOfCollection: {
        allowNull: false,
        type: Sequelize.DATE
      },
      nurse_doctorInCharge: {
        allowNull: false,
        type: Sequelize.STRING
      },
      remarks: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bloodcollections');
  }
};