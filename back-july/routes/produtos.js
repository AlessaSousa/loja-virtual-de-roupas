const express = require('express')
const {Produtos} = require('../models')
const router = express.Router()

const path = require ('path')

router.use (express.static('public'))


//Mostrar todos os produtos
router.get('/', async (req, res) => {
    try {
      const produtos = await Produtos.findAll({ include: 'categoria' });
      res.json(produtos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

//Registrar novo produto
router.post('/', async (req, res) => {
    try {
      const { nome, categoria, descricao, preco } = req.body;
      const novoProduto = await Produtos.create({ nome, categoria, descricao, preco });
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router