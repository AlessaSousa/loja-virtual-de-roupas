const { Produtos } = require('../models')
require('dotenv').config()

module.exports = class ProdutosController {
    static async cadastrarProduto(req, res) {
        try {
          const { nome, categoria, descricao, tamanho, cor, preco, vendedorId } = req.body;
          const novoProduto = await Produtos.create({ nome, categoria, descricao, tamanho, cor, preco, vendedorId });
          res.status(201).json(novoProduto);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

    static async produtos(req, res) {
        try {
          const produtos = await Produtos.findAll({});
          res.json(produtos);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

      static async deletarProduto(req, res) {
        const vendedorId = req.user.id;
        const { produtoId } = req.params;
      
        try {
          const item = await Carrinho.findOne({ where: { vendedorId, produtoId } });
          if (vendedorId != item.vendedorId) return res.status(403).json({ message: 'Você não tem permissão para deletar este produto' })
          if (!item) {
            return res.status(404).json({ message: 'Produto não encontrado no carrinho' });
          }
      
          await item.destroy();
          res.status(200).json({ message: 'Produto removido do carrinho com sucesso' });
        } catch (error) {
          res.status(500).json({ message: 'Erro ao remover produto do carrinho', error });
        }
      }
}