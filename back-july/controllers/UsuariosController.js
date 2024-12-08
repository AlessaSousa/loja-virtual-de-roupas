const {Usuarios} = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = class UsuariosController {
    static async showAll (req, res) {
        try {
            const allUsuarios = await Usuarios.findAll()
            res.status(200).send(allUsuarios)
        } catch (error) {
            res.status(500).send({ error: 'Erro ao buscar todos os usuários' })
        }
    }

    static async showOne (req, res) {
        try {
            const userID = req.user.id
            if(!userID) return res.status(400).send({error: 'ID não fornecido'})
            const usuario = await Usuarios.findByPk(userID)
        
            if (usuario) {
                res.status(200).send(usuario)
            } else {
                res.status(404).send({ error: 'Usuário não encontrado' })
            }
        } catch (error) {
            res.status(500).send({ error: 'Erro ao buscar o usuário' })
        }
    }

    static async create(req, res) {
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
    }

    static async update(req, res) {
        const user = await Usuarios.findByPk(req.params.id)
        const result = await Usuarios.update(
            {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            },
            {
                where: { id: req.params.id } 
            }
        );
        try {
            await result.save();
            return res.status(201).json({ message: 'Dados do usuário atualizados com sucesso!' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar dados do usuário', error });
        }
    }

    static async delete (req, res) {
        try {
            const usuario = await Usuarios.findByPk(req.params.id)
            if (usuario) {
                await usuario.destroy()
                res.status(200).send({ success: true })
            } else {
                res.status(404).send({ error: 'Usuário não encontrado' })
            }
        } catch (error) {
            res.status(500).send({ error: 'Erro ao deletar o usuário' })
        }
    }

    static async login(req, res) {
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
                return res.status(401).json({ message: 'Usuário ou senha incorretos' });
            }

            const token = jwt.sign(
                { id: user.id },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
    
            return res.status(200).json({
                message: 'Login realizado com sucesso',
                accessToken: token,
                id: user.id,
                nome: user.nome
            });
    
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro no servidor' });
        }
    }
}


