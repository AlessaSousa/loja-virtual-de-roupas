const express = require('express');
const PedidosController = require('../controllers/PedidosController');
const ProdutosController = require('../controllers/ProdutosController');
const UsuariosController = require('../controllers/UsuariosController');
const verifyToken = require("../middleware/auth");
const { verify } = require('jsonwebtoken');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags: [Users]
 *     summary: Retorna todos os usuários
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get('/users', verifyToken, UsuariosController.showAll);

/**
 * @swagger
 * /user:
 *   get:
 *     tags: [Users]
 *     summary: Retorna um usuário pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: ID do usuário
 *     responses:
 *       200:
 *         description: Detalhes de um usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/user', verifyToken, UsuariosController.showOne);

/**
 * @swagger
 * /item:
 *   post:
 *     tags: [Products]
 *     summary: Registra um novo produto
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Produto registrado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/item', verifyToken, ProdutosController.cadastrarProduto);

/**
 * @swagger
 * /orders:
 *   get:
 *     tags: [Orders]
 *     summary: Retorna todos os pedidos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   status:
 *                     type: string
 *                   total:
 *                     type: number
 *                     format: float
 */
router.get("/orders", verifyToken, PedidosController.pedidos);

/**
 * @swagger
 * /order:
 *   post:
 *     tags: [Orders]
 *     summary: Cria um novo pedido
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/order', verifyToken, PedidosController.criarPedido);

// No caso de rota não encontrada, retornar erro 404
router.use((req, res, next) => {
    res.status(404).send('Rota não encontrada');
});

module.exports = router;
