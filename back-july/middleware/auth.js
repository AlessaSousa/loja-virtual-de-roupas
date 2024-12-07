const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')){
        console.log(req.headers)
        return res.status(401).send({error: 'Acesso negado. Token não encontrado'})
        
    }

    const token = authHeader.split(' ')[1]
    try {
        console.log(req.headers)
        const decoded = jwt.verify(token, secret)
        req.user = decoded
        next()
    } catch (error) {
        console.log(req.headers)
        return res.status(403).send({error: 'Token inválido'})
    }
}

module.exports = verifyToken