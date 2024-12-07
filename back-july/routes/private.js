const express = require('express')
const PedidosController = require('../controllers/PedidosController')
const ProdutosController = require('../controllers/ProdutosController')
const UsuariosController = require('../controllers/UsuariosController')
const verifyToken = require("../middleware/auth")
const { verify } = require('jsonwebtoken')
const router = express.Router()

//Mostrar todos os usuários
router.get('/users', verifyToken, UsuariosController.showAll)

//Mostrar apenas um usuário por chave primária (ID)
router.get('/user', verifyToken, UsuariosController.showOne)

//Registrar novo produto
router.post('/item', verifyToken, ProdutosController.cadastrarProduto);

//Puxar e mostrar todos os pedidos
router.get("/orders", verifyToken, PedidosController.pedidos)

//Criar novo pedido
router.post('/order', verifyToken, PedidosController.criarPedido);

//No caso de rota não encontrada, retornar erro 404
router.use((req, res, next) =>{
    res.status(404).send('Rota não encontrada')
})

module.exports = router;