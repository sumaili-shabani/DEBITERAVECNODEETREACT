'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('roles', [
      { nom: 'Admin', createdAt: new Date(), updatedAt: new Date() },
      { nom: 'Utilisateur', createdAt: new Date(), updatedAt: new Date() },
      { nom: 'Formateur', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
