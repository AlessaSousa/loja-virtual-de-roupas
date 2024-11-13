'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produtos.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: DataTypes.TEXT,
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }

  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};