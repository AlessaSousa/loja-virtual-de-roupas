const express = require('express');
const { swaggerUi, swaggerDocs } = require('./swagger');
const cors = require('cors');
const app = express()
const corsOptions = {
    origin: 'http://localhost:5173',   
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization'        
};
app.use('/api-trendix', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors(corsOptions));
const publicRouter = require('./routes/public')
const privateRouter = require('./routes/private')
require('dotenv').config()
const PORT = process.env.PORT

const db = require('./models')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/public', publicRouter)
app.use('/private', privateRouter)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
