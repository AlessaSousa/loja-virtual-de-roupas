const { Pagamentos } = require('../models');
const pedidos = require('../models/pedidos');
require('dotenv').config()

module.exports = class PagamentosController {
    static async pagamento(req, res) {
        const transação = await sequelize.transaction();

        try {
          const { pedidoId, metodo } = req.body;
          const userId = req.user.id
      
          // Verificar se o pedido existe e pertence ao usuário
          const pedido = await pedidos.findOne({ where: { id: pedidoId, userId } });
          if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado.' });
          }
      
          // Simulando um sistema de pagamento, para fins didáticos
          const valor = pedido.preco;
          const statusPagamento = Math.random() > 0.2 ? 'Aprovado' : 'Recusado'; // 80% de chance de aprovação
      
          // Criar registro de pagamento no "banco"
          const pagamento = await Pagamentos.create({ userId, pedidoId, valor, metodo, status: statusPagamento}, {transação});
          
          await pedido.update({ statusPagamento }, { transação })

          await transação.commit()

          if (statusPagamento === 'Aprovado') {
            return res.status(201).json({
              message: 'Pagamento aprovado com sucesso!',
              pagamento,
            });
          } else {
            return res.status(401).json({
              message: 'Pagamento recusado. Verifique seu método de pagamento e tente novamente',
              pagamento,
            });
          }
        } catch (error) {
            await transação.rollback();
          return res.status(500).json({ error: error.message });
        }
      }
}