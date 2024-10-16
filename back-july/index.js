const express = require('express')
const app = express()
const usuariosRouter = require('./routes/users')
const produtosRouter = require('./routes/produtos')
const pedidosRouter = require('./routes/pedidos')
require('dotenv').config()
const PORT = process.env.PORT

const db = require('./models')
// rotas

app.use('/usuarios', usuariosRouter)
app.use('/pedidos', pedidosRouter)
app.use('/produtos', produtosRouter)
// app

app.get('/', (req, res) => {
    res.send('Bem vindo à API para nossa loja de roupas. Utilize a rota /usuarios para ver nossos usuários, /produtos para nossos produtos disponíveis e /pedidos para ver nossos pedidos já feitos.');
  });

db.sequelize.sync().then(() =>{
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    })
})