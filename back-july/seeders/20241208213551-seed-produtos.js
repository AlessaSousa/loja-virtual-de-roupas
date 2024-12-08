'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [
      {
        nome: 'Camiseta Foo Fighters',
        descricao: 'Camiseta preta com estampa da banda Foo Fighters',
        tamanho: 'M',
        cor: 'Preto',
        categoria: 'Vestuário',
        preco: 50.00,
        vendedorId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Calça de Alfaiataria',
        descricao: 'Calça bege em modelo alfaiataria',
        tamanho: '38',
        cor: 'Bege',
        categoria: 'Vestuário',
        preco: 85.00,
        vendedorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
