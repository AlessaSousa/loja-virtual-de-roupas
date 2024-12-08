'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.hasMany(models.Carrinho, { foreignKey: 'userId', onDelete: 'CASCADE' });
      Usuarios.hasMany(models.Pedidos, { foreignKey: 'vendedorId', onDelete: 'CASCADE' });
      Usuarios.hasMany(models.Produtos, { foreignKey: 'vendedorId', onDelete: 'CASCADE' });
    }
  }
  Usuarios.init({
    nome: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true

    },
    senha: DataTypes.STRING,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};