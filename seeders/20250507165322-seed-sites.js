'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sites', [
      {
        nom: 'Elimu Academy',
        description: 'Centre de formation professionnelle',
        email: 'info@elimu.cd',
        adresse: 'Gombe, Kinshasa',
        tel1: '+243810000000',
        tel2: '+243820000000',
        tel3: null,
        token: 'TOKEN123',
        about: 'Nous préparons les jeunes au marché de l\'emploi.',
        mission: 'Former pour l\'emploi et l\'entrepreneuriat.',
        objectif: 'Réduire le chômage des jeunes.',
        politique: 'Politique de confidentialité.',
        condition: 'Conditions d\'utilisation.',
        logo: 'logo.png',
        facebook: 'https://facebook.com/elimu',
        linkedin: 'https://linkedin.com/company/elimu',
        twitter: 'https://twitter.com/elimu',
        youtube: 'https://youtube.com/@elimu',
        whatsapp: '+243899999999',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: 'Dream Academy',
        description: 'Dream is training center',
        email: 'info@elimu.cd',
        adresse: 'Gombe, Kinshasa',
        tel1: '+243810000000',
        tel2: '+243820000000',
        tel3: null,
        token: 'TOKEN123',
        about: 'Nous préparons les jeunes au marché de l\'emploi.',
        mission: 'Former pour l\'emploi et l\'entrepreneuriat.',
        objectif: 'Réduire le chômage des jeunes.',
        politique: 'Politique de confidentialité.',
        condition: 'Conditions d\'utilisation.',
        logo: 'logo.png',
        facebook: 'https://facebook.com/elimu',
        linkedin: 'https://linkedin.com/company/elimu',
        twitter: 'https://twitter.com/elimu',
        youtube: 'https://youtube.com/@elimu',
        whatsapp: '+243899999999',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('sites', null, {});
  }
};
