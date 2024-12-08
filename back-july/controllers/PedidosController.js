const {Pedidos} = require('../models')
require('dotenv').config()

module.exports = class PedidosController {
    
    static async criarPedido(req, res) {
        try {
          const { quantidade, doacao } = req.body;
          const pedido = await pedidos.create({ quantidade, doacao });
          res.status(201).json(pedido);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

    static async pedidos(req, res) {
        try {
            const pedidos = await Pedidos.findAll({});
            res.status(200).send(pedidos)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}