'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('projets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      idSecteur: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'secteurs',     // nom de la table cible
          key: 'id'             // clé primaire de la table cible
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },

      annee: {
        type: Sequelize.STRING,
        allowNull: true
      },
      budget: {
        type: Sequelize.STRING,
        allowNull: true
      },
      organisation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      titre: {
        type: Sequelize.STRING,
        allowNull: true
      },
      soustitre: {
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
    await queryInterface.dropTable('projets');
  }
};
