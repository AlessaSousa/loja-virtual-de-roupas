'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carrinhos', [
      {
        userId: 1, 
        produtoId: 1,
        quantidade: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1, 
        produtoId: 2,
        quantidade: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carrinhos', null, {});
  }
};
