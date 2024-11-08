const express = require('express')
const cors = require('cors');
const app = express()
const corsOptions = {
    origin: 'http://localhost:5173',   
    credentials: true                  
};

app.use(cors(corsOptions));
const usuariosRouter = require('./routes/users')
const produtosRouter = require('./routes/produtos')
const pedidosRouter = require('./routes/pedidos')
require('dotenv').config()
const PORT = process.env.PORT

const db = require('./models')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/usuarios', usuariosRouter)
app.use('/pedidos', pedidosRouter)
app.use('/produtos', produtosRouter)

app.post('/teste', (req, res) => {
    console.log(req.body); // Verificar se os dados chegam corretamente
    res.json({ recebido: req.body });
});

app.get('/', (req, res) => {
    res.send('Bem vindo à API para nossa loja de roupas. Utilize a rota /usuarios para ver nossos usuários, /produtos para nossos produtos disponíveis e /pedidos para ver nossos pedidos já feitos.');
  });
  

db.sequelize.sync().then(() =>{
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    })
})