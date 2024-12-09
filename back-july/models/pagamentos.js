'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pagamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pagamentos.belongsTo(models.Usuarios, { foreignKey: 'userId', onDelete: 'CASCADE' });
      Pagamentos.belongsTo(models.Pedidos, { foreignKey: 'pedidoId', onDelete: 'CASCADE' });
    }
  }
  Pagamentos.init({
    valor: DataTypes.DECIMAL(10,2),
    status: {
      type: DataTypes.ENUM('Pendente', 'Aprovado', 'Recusado'),
      allowNull: false,
      defaultValue: 'Pendente'
    },
    metodo: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    pedidoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pagamentos',
  });
  return Pagamentos;
};