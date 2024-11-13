'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Pedidos', [{
      quantidade: 2,
      doacao: 'não',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {});
  }
};
