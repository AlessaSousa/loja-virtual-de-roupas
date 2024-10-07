const express = require('express')
const app = express()
const db = require('./models')

// rotas

const usersRouter = require('./routes/users')
app.use("/users", usersRouter);

// app

db.sequelize.sync().then(() =>{
    app.listen(3001, () => {
        console.log("Servidor rodando na porta 3001");
    })
})