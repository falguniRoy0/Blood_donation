'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      usertype: {
        allowNull: true,
        type: Sequelize.STRING
      },
      // bloodtype: {
      //   allowNull: true,
      //   type: Sequelize.STRING
      // },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING
      },
      gender: {
        allowNull: true,
        type: Sequelize.STRING
      },
      phonenumber: {
        allowNull: true,
        unique: true,
        type: Sequelize.INTEGER
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING
      },
      confirmpassword: {
        allowNull: true,
        type: Sequelize.STRING
      },
      // zipcode: {
      //   allowNull: true,
      //   type: Sequelize.STRING
      // },
      // bloodgroup: {
      //   allowNull: true,
      //   type: Sequelize.STRING
      // },
      message: {
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
    await queryInterface.dropTable('Users');
  }
};