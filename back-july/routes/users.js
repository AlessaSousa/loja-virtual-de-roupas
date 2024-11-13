const express = require('express')
const {Usuarios} = require('../models')
const bcrypt = require('bcrypt');
const router = express.Router()

const path = require ('path')

router.use (express.static('public'))

//Mostrar todos os usuários
router.get('/', async (req, res) => {
    try {
        const users = await Usuarios.findAll({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

//Cadastrar novo usuário
router.post('/', async (req, res) => {
    console.log(req.body)
  const { nome, email, senha } = req.body;
  
  // Verificar se o usuário já existe
  const userExists = await Usuarios.findOne({  where: { email: email } });
  if (userExists) {
      return res.status(400).json({ message: 'Usuário já existe!' });
  }

  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(senha, 10);

  // Criar novo usuário
  const newUser = await Usuarios.create({
      nome,
      email,
      senha: hashedPassword
  });

  try {
      await newUser.save();
      return res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
      return res.status(500).json({ message: 'Erro ao criar usuário', error });
  }
});

//Login
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: 'Email e senha são necessários' });
    }

    try {
        const user = await Usuarios.findOne({ where: { email } });
        if (!user || !user.senha) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }
        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        return res.status(200).json({
            message: 'Login realizado com sucesso',
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
});


module.exports = router