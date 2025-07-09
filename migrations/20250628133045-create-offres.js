'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('offres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      dates: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lieu: {
        type: Sequelize.STRING,
        allowNull: true
      },
      organisation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lien: {
        type: Sequelize.STRING,
        allowNull: true
      },
      titre: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
     
      fichier: {
        type: Sequelize.STRING,
        allowNull: true
      },
      slug: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('offres');
  }
};
