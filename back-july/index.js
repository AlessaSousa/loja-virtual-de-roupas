const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

const db = require('./models')
// rotas
const usuariosRouter = require('./routes/users')
app.use("/users", usuariosRouter);
// app

db.sequelize.sync().then(() =>{
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    })
})