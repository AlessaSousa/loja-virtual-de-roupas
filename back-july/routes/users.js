const express = require('express')
const {Usuarios} = require('../models')
const router = express.Router()

const path = require ('path')

router.use (express.static('public'))

//Mostrar todos os usuários
router.get('/', async (req, res) => {
    try {
        const users = await Usuarios.findAll({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

//Cadastrar novo usuário
router.post('/', async (req, res) => {
    try {
      const { username, email, senha } = req.body;
      const cadastro = await Usuarios.create({ username, email, senha });
      res.status(201).json(cadastro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router