const express = require('express');
const ProdutosController = require('../controllers/ProdutosController');
const UsuariosController = require('../controllers/UsuariosController');
const PedidosController = require('../controllers/PedidosController.js')
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
 *                   nome:
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
 *                 nome:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/user', verifyToken, UsuariosController.showOne);
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /signin:
 *   post:
 *     tags: [Users]
 *     summary: Cadastrar um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/signin', UsuariosController.create);

/**
 * @swagger
 * /login:
 *   post:
 *     tags: [Users]
 *     summary: Login de usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', UsuariosController.login);

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Operações relacionadas a produtos
 */

/**
 * @swagger
 * /items:
 *   get:
 *     tags: [Products]
 *     summary: Retorna todos os produtos
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   preco:
 *                     type: number
 *                     format: float
 *                   categoria:
 *                     type: string
 *                   descricao:
 *                     type: string
 */
router.get('/items', ProdutosController.produto);

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
 *                   nome:
 *                     type: string
 *                   preco:
 *                     type: number
 *                     format: float
 *                   categoria:
 *                     type: string
 *                   descricao:
 *                     type: string
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
 *                   quantidade:
 *                     type: integer
 *                   doacao:
 *                     type: boolean
 */
router.get("/orders", verifyToken, PedidosController.pedidos);

/**
 * @swagger
 * tags:
 *   - name: Orders
 *     description: Operações relacionadas a pedidos
 */

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
 *                   quantidade:
 *                     type: integer
 *                   doacao:
 *                     type: boolean
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
