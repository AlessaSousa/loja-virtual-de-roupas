const express = require('express')
const ProdutosController = require('../controllers/ProdutosController')
const UsuariosController = require('../controllers/UsuariosController')
const router = express.Router()

//Cadastrar novo usuário
router.post('/signin', UsuariosController.create)

//Mostrar todos os produtos
router.get('/items', ProdutosController.produto)

module.exports = router;

