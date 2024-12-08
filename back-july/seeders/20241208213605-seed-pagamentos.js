'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pagamentos', [
      {
        valor: 85.00,
        status: 'Aprovado',
        metodo: 'Cartão de Crédito',
        userId: 1,
        pedidoId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    
  }
};
