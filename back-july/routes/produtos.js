const express = require('express')
const router = express.Router()
const path = require ('path')
const ProdutosController = require('../controllers/ProdutosController')

//Mostrar todos os produtos
router.get('/items', ProdutosController.produto);

//Registrar novo produto
router.post('/item', ProdutosController.cadastrarProduto);

module.exports = router