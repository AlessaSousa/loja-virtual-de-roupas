'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pedidos', [
      {
        itens: JSON.stringify({
          "nome": "Calça de Alfaiataria",
          "descricao": "Calça bege em modelo alfaiataria",
          "tamanho": "38",
          "cor": "Bege"
        }),
        quantidade: 1,
        doacao: 'não',
        userId: 2, 
        statusPagamento: 'Pendente',
        statusEntrega: 'Em rota de entrega',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {});
  }
};
