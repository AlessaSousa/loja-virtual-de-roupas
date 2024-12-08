const { Carrinho } = require('../models')
const { Produtos } = require('../models')
require('dotenv').config()

module.exports = class CarrinhoController {
    static async getCarrinho (req, res) {
        const userId = req.user.id; 
        try {
          const items = await Carrinho.findAll({
            where: { id: userId },
            include: [{ model: Produtos }],
          });
      
          res.status(200).json(items);
        } catch (error) {
          res.status(500).json({ message: 'Erro ao buscar itens do carrinho', error });
        }
      };

      static async adicionarAoCarrinho (req, res) {
        const userId = req.user.id;
        const { produtoId, quantidade } = req.body;
      
        try {
          // Verifica se o produto já está no carrinho
          const itemExiste = await Carrinho.findOne({ where: { userId, produtoId } });
      
          if (itemExiste) {
            // Atualiza a quantidade
            itemExiste.quantidade += quantidade || 1;
            await itemExiste.save();
            return res.status(200).json(itemExiste);
          }
      
          // Adiciona um novo item ao carrinho
          const novoItem = await Carrinho.create({ userId, produtoId, quantidade: quantidade || 1 });
      
          res.status(201).json(novoItem);
        } catch (error) {
          res.status(500).json({ message: 'Erro ao adicionar produto ao carrinho', error });
        }
      };

      static async removerDoCarrinho (req, res) {
        const userId = req.user.id;
        const { produtoId } = req.body;
      
        try {
          const item = await Carrinho.findOne({ where: { userId, produtoId } });
      
          if (!item) {
            return res.status(404).json({ message: 'Produto não encontrado no carrinho' });
          }
      
          await item.destroy();
          res.status(200).json({ message: 'Produto removido do carrinho com sucesso' });
        } catch (error) {
          res.status(500).json({ message: 'Erro ao remover produto do carrinho', error });
        }
      };
}