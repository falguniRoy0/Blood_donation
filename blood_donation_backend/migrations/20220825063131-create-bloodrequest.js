'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bloodrequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateOfRequest: {
        allowNull: false,
        type: Sequelize.DATE
      },
      bloodGroup: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numOfBags: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      amountPerBag: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      purpose: {
        allowNull: false,
        type: Sequelize.STRING
      },
      requestStatus: {
        allowNull: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Bloodrequests');
  }
};