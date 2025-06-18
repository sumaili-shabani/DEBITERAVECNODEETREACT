'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('123456', 10);

    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin Roger',
        email: 'admin@demo.com',
        telephone: '0123456789',
        avatar: 'avatar.png',
        passwords: hashedPassword,
        idRole: 1, // Admin
        sexe: 'M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alice Admin',
        email: 'alice@demo.com',
        telephone: '0123456789',
        avatar: 'avatar.png',
        passwords: hashedPassword,
        idRole: 1, // Admin
        sexe: 'F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bob Utilisateur',
        email: 'bob@demo.com',
        telephone: '0987654321',
        avatar: 'avatar.png',
        passwords: hashedPassword,
        idRole: 2, // Utilisateur
        sexe: 'M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Julie poma',
        email: 'julieboma@demo.com',
        telephone: '0987654321',
        avatar: 'avatar.png',
        passwords: hashedPassword,
        idRole: 2, // Utilisateur
        sexe: 'F',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
