'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom: Sequelize.STRING,
      description: Sequelize.TEXT,
      email: Sequelize.STRING,
      adresse: Sequelize.STRING,
      tel1: Sequelize.STRING,
      tel2: Sequelize.STRING,
      tel3: Sequelize.STRING,
      token: Sequelize.STRING,
      about: Sequelize.STRING,
      logo: Sequelize.STRING,
      facebook: Sequelize.STRING,
      linkedin: Sequelize.STRING,
      twitter: Sequelize.STRING,
      youtube: Sequelize.STRING,
      whatsapp: Sequelize.STRING,
      mission: Sequelize.TEXT,
      objectif: Sequelize.TEXT,
      politique: Sequelize.TEXT,
      condition: Sequelize.TEXT,
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
    await queryInterface.dropTable('sites');
  }
};
