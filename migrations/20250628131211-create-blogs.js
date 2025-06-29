'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      titre: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sousTitre: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      icone: {
        type: Sequelize.STRING,
        allowNull: true
      },

      // 🔽 Clé étrangère
      idCategory: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'categories',     // nom de la table cible
          key: 'id'           // clé primaire de la table cible
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },

      tug: {
        type: Sequelize.STRING,
        allowNull: true
        
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        allowNull: false
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
    await queryInterface.dropTable('blogs');
  }
};
