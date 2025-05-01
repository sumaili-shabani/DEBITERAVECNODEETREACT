'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      telephone: Sequelize.STRING,
      avatar: Sequelize.STRING,
      passwords: Sequelize.STRING,
      sexe: Sequelize.STRING,

      // 🔽 Clé étrangère
      idRole: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles',     // nom de la table cible
          key: 'id'           // clé primaire de la table cible
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('users');
  }
};

