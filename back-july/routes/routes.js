const express = require('express');
const PedidosController = require('../controllers/PedidosController');
const ProdutosController = require('../controllers/ProdutosController');
const UsuariosController = require('../controllers/UsuariosController');
const verifyToken = require("../middleware/auth");
const CarrinhoController = require('../controllers/CarrinhoController');
const PagamentosController = require('../controllers/PagamentosController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operações relacionadas a usuários
 *   - name: Products
 *     description: Operações relacionadas a produtos
 *   - name: Orders
 *     description: Operações relacionadas a pedidos
 *   - name: Cart
 *     description: Operações relacionadas ao carrinho
 *   - name: Payment
 *     description: Operações relacionadas a pagamentos
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
 * /updateUser:
 *   put:
 *     tags: [Users]
 *     summary: Atualiza as informações de um usuário
 *     security:
 *       - bearerAuth: []
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
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.put('/updateUser', verifyToken, UsuariosController.update);

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
router.get('/items', ProdutosController.produtos);

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
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *                 format: float
 *               categoria:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produto registrado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/item', verifyToken, ProdutosController.cadastrarProduto);

/**
 * @swagger
 * /deleteItem:
 *   delete:
 *     tags: [Products]
 *     summary: Deleta um produto registrado
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 */
router.delete('/deleteItem', verifyToken, ProdutosController.deletarProduto);

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
 *                     type: string
 *                     enum: [sim, não]
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
 *               quantidade:
 *                 type: integer
 *               doacao:
 *                 type: string
 *                 enum: [sim, não]
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/order', verifyToken, PedidosController.criarPedido);

/**
 * @swagger
 * /payment:
 *   post:
 *     tags: [Payment]
 *     summary: Realiza o pagamento de um pedido
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pedidoId:
 *                 type: integer
 *               metodoPagamento:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pagamento realizado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/payment', verifyToken, PagamentosController.pagamento);

/**
 * @swagger
 * /cart:
 *   get:
 *     tags: [Cart]
 *     summary: Retorna itens do carrinho do usuário
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Itens do carrinho
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   produtoId:
 *                     type: integer
 *                   quantidade:
 *                     type: integer
 */
router.get('/cart', verifyToken, CarrinhoController.getCarrinho);

/**
 * @swagger
 * /addToCart:
 *   post:
 *     tags: [Cart]
 *     summary: Adiciona um item ao carrinho
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               produtoId:
 *                 type: integer
 *               quantidade:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Item adicionado ao carrinho
 *       400:
 *         description: Dados inválidos
 */
router.post('/addToCart', verifyToken, CarrinhoController.adicionarAoCarrinho);

/**
 * @swagger
 * /removeFromCart:
 *   delete:
 *     tags: [Cart]
 *     summary: Remove um item do carrinho
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               produtoId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Item removido do carrinho
 *       404:
 *         description: Produto não encontrado no carrinho
 */
router.delete('/removeFromCart', verifyToken, CarrinhoController.removerDoCarrinho);

// No caso de rota não encontrada, retornar erro 404
router.use((req, res, next) => {
    res.status(404).send('Rota não encontrada');
});

module.exports = router;
