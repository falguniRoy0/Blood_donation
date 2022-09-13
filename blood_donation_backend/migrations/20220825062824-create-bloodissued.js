'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bloodissueds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      issued_by: {
        allowNull: false,
        type: Sequelize.STRING
      },
      issued_to: {
        allowNull: false,
        type: Sequelize.STRING
      },
      issuedDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      amount_paid: {
        allowNull: false,
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Bloodissueds');
  }
};