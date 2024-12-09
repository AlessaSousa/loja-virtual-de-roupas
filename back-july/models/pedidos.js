'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedidos.belongsTo(models.Carrinho, { foreignKey: 'carrinhoId', onDelete: 'CASCADE' });
      Pedidos.belongsTo(models.Usuarios, { foreignKey: 'userId', onDelete: 'CASCADE' });
      Pedidos.hasOne(models.Pagamentos, { foreignKey: 'pedidoId', onDelete: 'SET NULL' });
    }
  }
  Pedidos.init({
    itens: DataTypes.JSON,
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doacao: {
      type: DataTypes.ENUM('sim','não'),
      allowNull: false,
      defaultValue: 'não',
    },
    userId: DataTypes.INTEGER,
    carrinhoId: DataTypes.INTEGER,
    statusPagamento: {
      type: DataTypes.ENUM('Pendente', 'Aprovado', 'Recusado'),
      allowNull: false,
      defaultValue: 'Pendente'
    },
    statusEntrega: {
      type: DataTypes.ENUM('Preparando pedido', 'Pacote coletado para envio', 'Em trânsito',
        'Em rota de entrega', 'Entregue', 'Taxado pelo Haddad', 'Preso em Curitiba'),
        allowNull: false,
        defaultValue: 'Preparando pedido',
    } 
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};