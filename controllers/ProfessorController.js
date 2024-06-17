const {Professor} = require('../models')
require ('dotenv').config()

module.exports = class ProfessorController {
    static async showAll(req, res) {
        try {
           const professor = await Professor.findAll() 
            res.status(200).json({
                data: professor
            })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async show (req, res){
        try {
            const professor = await Professor.findByPk(req.params.id)
            res.status(200).send(professor)
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
            
        }
    }
    static async create(req, res){
        try {
            const professor = await Professor.create({
                nome: req.body.nome,
                turma: req.body.turma,
                turno: req.body.turno,
        })
        res.status(201).send("Professor criado com sucesso!")
        } catch (e) {
            res.status(500).json({
                error: e.message 
            })
        }
    }

    static async update (req, res){
        try {
            const professor = await Professor.findByPk(req.params.id)
            const result = await professor.update({
                nome: req.body.nome,
                turma: req.body.turma,
                turno: req.body.turno,
        })
        res.status(200).send("Professor atualizado com sucesso!")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })          
        }
    }
    static async delete (req, res){
        try {
            const professor = await Professor.findByPk(req.params.id)
            await professor.destroy()
            res.status(200).send("Professor excluido com sucesso.")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
            
        }
    }
}