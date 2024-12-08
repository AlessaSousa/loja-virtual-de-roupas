'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pagamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.DECIMAL(10,2)
      },
      status: {
          type: Sequelize.ENUM('Pendente', 'Aprovado', 'Recusado'),
          allowNull: false,
          defaultValue: 'Pendente'
      },
        metodo:{
          type: Sequelize.STRING
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Usuarios',
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
        pedidoId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Pedidos',
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pagamentos');
  }
};