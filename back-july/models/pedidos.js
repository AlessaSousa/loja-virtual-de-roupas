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
      // define association here
    }
  }
  Pedidos.init({
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doacao: {
      type: DataTypes.ENUM('sim','não'),
      allowNull: false,
      defaultValue: 'não',
    } 
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};