const express = require('express');
const ProdutosController = require('../controllers/ProdutosController');
const UsuariosController = require('../controllers/UsuariosController');
const router = express.Router();

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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
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
 *               password:
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
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 *                     format: float
 *                   quantity:
 *                     type: integer
 */
router.get('/items', ProdutosController.produto);

// No caso de rota não encontrada, retornar erro 404
router.use((req, res, next) => {
    res.status(404).send('Rota não encontrada');
});

module.exports = router;
