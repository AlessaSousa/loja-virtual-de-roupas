'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrinho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carrinho.belongsTo(models.Usuarios, { foreignKey: 'userId', onDelete: 'CASCADE' });
      Carrinho.belongsTo(models.Produtos, { foreignKey: 'produtoId', onDelete: 'CASCADE' });
      Carrinho.belongsTo(models.Pedidos, { foreignKey: 'pedidoId', onDelete: 'CASCADE' });
    }
  }
  Carrinho.init({
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'Carrinho',
  });
  return Carrinho;
};