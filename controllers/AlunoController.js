const {Aluno} = require('../models')
require ('dotenv').config()

module.exports = class AlunoController {
    static async showAll(req, res) {
        try {
           const aluno = await Aluno.findAll() 
            res.status(200).json({
                data: aluno
            })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async show (req, res){
        try {
            const aluno = await Aluno.findByPk(req.params.id)
            res.status(200).send(aluno)
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
            
        }
    }
    static async create(req, res){
        try {
            const aluno = await Aluno.create({
                nome: req.body.nome,
                turma: req.body.turma,
                turno: req.body.turno,
        })
        res.status(201).send("Aluno criado com sucesso!")
        } catch (e) {
            res.status(500).json({
                error: e.message 
            })
        }
    }

    static async update (req, res){
        try {
            const aluno = await Aluno.findByPk(req.params.id)
            const result = await aluno.update({
                nome: req.body.nome,
                turma: req.body.turma,
                turno: req.body.turno,
        })
        res.status(200).send("Aluno atualizado com sucesso!")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })          
        }
    }
    static async delete (req, res){
        try {
            const aluno = await Aluno.findByPk(req.params.id)
            await aluno.destroy()
            res.status(200).send("Aluno excluido com sucesso.")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
            
        }
    }
}