'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rnas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      upi: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.DATE
      },
      userstamp: {
        type: Sequelize.STRING
      },
      crc64: {
        type: Sequelize.STRING
      },
      len: {
        type: Sequelize.INTEGER
      },
      seq_short: {
        type: Sequelize.STRING
      },
      seq_long: {
        type: Sequelize.STRING
      },
      md5: {
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
    await queryInterface.dropTable('rnas');
  }
};