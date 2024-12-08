'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itens: {
        type: Sequelize.JSON,
        allowNull: false
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      doacao: {
        type: Sequelize.ENUM('sim','não'),
        allowNull: false,
        defaultValue: 'não'
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
      carrinhoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Carrinho',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      statusPagamento: {
        type: Sequelize.ENUM('Pendente', 'Aprovado', 'Recusado'),
        allowNull: false,
        defaultValue: 'Pendente'
      },
      statusEntrega: {
        type: Sequelize.ENUM('Preparando pedido', 'Pacote coletado para envio', 'Em trânsito',
          'Em rota de entrega', 'Entregue', 'Taxado pelo Haddad', 'Preso em Curitiba'),
          allowNull: false,
          defaultValue: 'Preparando pedido',
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
    await queryInterface.dropTable('Pedidos');
  }
};