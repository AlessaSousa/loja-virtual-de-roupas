const usuarios = require('../models/usuarios')
require('dotenv').config()

module.exports = class UsuariosController {
    static async showAll (req, res) {
        try {
            const allUsuarios = await usuarios.findAll()
            res.status(200).send(allUsuarios)
        } catch (error) {
            res.status(500).send({ error: 'Erro ao buscar todos os usuários' })
        }
    }

    static async showOne (req, res) {
        try {
            const usuario = await usuarios.findByPk(req.params.id)
            if (usuario) {
                res.status(200).send(usuario)
            } else {
                res.status(404).send({ error: 'Usuário não encontrado' })
            }
        } catch (error) {
            res.status(500).send({ error: 'Erro ao buscar o usuário' })
        }
    }

    static async create(req, res){
        try {
            const usuario = await usuarios.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            })
            if (usuario) {
                res.status(200).send(usuario)
            } else {
                res.status(404).send({ error: 'Usuário não cadastrado' })
            }
        } catch (error) {
            res.status(500).send({ error: 'Erro ao cadastrar o usuário' })
        }

    }

    static async delete (req, res) {
        try {
            const usuario = await usuarios.findByPk(req.params.id)
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
}
