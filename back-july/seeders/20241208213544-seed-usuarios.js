'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nome: 'Alê Sousa',
        email: 'alessasousa@example.com',
        senha: 'teste', 
        endereco: 'Rua Principal, 123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'July da Silva',
        email: 'julydasilva@example.com',
        senha: 'teste',
        endereco: 'Avenida Secundária, 456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
