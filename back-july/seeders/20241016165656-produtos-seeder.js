'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Produtos', [{
        nome: 'Camiseta verde',
        categoria: 'Vestuário',
        descricao: 'Uma camiseta verde de algodão',
        preco: 24.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Produtos', null, {})
  }
};
