const express = require('express')
const router = express.Router()

const path = require ('path');
const UsuariosController = require('../controllers/UsuariosController');

//Mostrar todos os usuários
router.get('/', UsuariosController.showAll)

//Mostrar apenas um usuário por chave primária (ID)
router.get('/', UsuariosController.showOne)

//Cadastrar novo usuário
router.post('/', UsuariosController.create)

//Login
router.post('/login', UsuariosController.login)

//No caso de rota não encontrada, retornar erro 404
router.use((req, res, next) =>{
    res.status(404).send('Rota não encontrada')
})


module.exports = router