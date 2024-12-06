const express = require('express')
const PedidosController = require('../controllers/PedidosController');
const router = express.Router()

const path = require ('path')

//Puxar e mostrar todos os pedidos
router.get("/orders", PedidosController.pedidos)

//Criar novo pedido
router.post('/order', PedidosController.criarPedido);

module.exports = router