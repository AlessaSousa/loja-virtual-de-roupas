const produtos = require('../models/produtos')
require('dotenv').config()

module.exports = class ProdutosController {
    static async cadastrarProduto(req, res) {
        try {
          const { nome, categoria, descricao, preco } = req.body;
          const novoProduto = await produtos.create({ nome, categoria, descricao, preco });
          res.status(201).json(novoProduto);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

    static async produto(req, res) {
        try {
          const produtos = await produtos.findAll({});
          res.json(produtos);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
}