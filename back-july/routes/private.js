const express = require('express')
const PedidosController = require('../controllers/PedidosController')
const ProdutosController = require('../controllers/ProdutosController')
const UsuariosController = require('../controllers/UsuariosController')
const verifyToken = require("../middleware/authMiddleware")
const { verify } = require('jsonwebtoken')
const router = express.Router()

//Mostrar todos os usuários
router.get('/users', verifyToken, UsuariosController.showAll)

//Mostrar apenas um usuário por chave primária (ID)
router.get('/user', verifyToken, UsuariosController.showOne)

//Login
router.post('/login', verifyToken, UsuariosController.login)

//Registrar novo produto
router.post('/item', verifyToken, ProdutosController.cadastrarProduto);

//Puxar e mostrar todos os pedidos
router.get("/orders", verifyToken, PedidosController.pedidos)

//Criar novo pedido
router.post('/order', verifyToken, PedidosController.criarPedido);

module.exports = router;