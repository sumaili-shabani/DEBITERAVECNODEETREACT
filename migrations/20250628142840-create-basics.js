'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('basics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      apropos: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      travail: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      don: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      structuregestion: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      financement: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      carriere: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      partenariat: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('basics');
  }
};
