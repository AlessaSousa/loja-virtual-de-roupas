const express = require('express')
const ProdutosController = require('../controllers/ProdutosController')
const UsuariosController = require('../controllers/UsuariosController')
const router = express.Router()

//Cadastrar novo usuário
router.post('/signin', UsuariosController.create)

//Login
router.post('/login', UsuariosController.login)

//Mostrar todos os produtos
router.get('/items', ProdutosController.produtos)

//No caso de rota não encontrada, retornar erro 404
router.use((req, res, next) =>{
    res.status(404).send('Rota não encontrada')
})

module.exports = router;


