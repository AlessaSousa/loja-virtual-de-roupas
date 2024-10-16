const express = require('express')
const {Pedidos} = require('../models')
const router = express.Router()

const path = require ('path')

router.use (express.static('public'))


//Puxar e mostrar todos os pedidos
router.get("/", async (req, res) => {
    try {
        const pedidos = await Pedidos.findAll({ include: 'produtos' });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

//Criar novo pedido
router.post('/', async (req, res) => {
    try {
      const { quantidade, doacao } = req.body;
      const pedido = await Pedidos.create({ quantidade, doacao });
      res.status(201).json(pedido);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router