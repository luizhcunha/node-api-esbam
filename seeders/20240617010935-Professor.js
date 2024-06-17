'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Professor', [{
     nome: 'Girafales',
     turma: 'Bruxa do 71',
     turno: 'Manhã',
     createdAt: new Date(),
     updatedAt: new Date(),
     }]
    );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Professor', null, {});
  }
};
