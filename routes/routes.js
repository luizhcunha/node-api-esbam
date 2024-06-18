const express = require('express')
const router = express.Router()
const path = require('path')
const ProfessorController = require('../controllers/ProfessorController')
const AlunoController = require('../controllers/AlunoController')

// Método GET

// Método showAll - Mostrar Todos
router.get('/professor',ProfessorController.showAll)
router.get('/aluno', AlunoController.showAll)

// Método show - Mostrar específico com ID
router.get('/professor/:id', ProfessorController.show)
router.get('/aluno/:id', AlunoController.show)

router.get ('/pagina',(req, res)=> {
    res.sendFile(path.resolve('./public/pagina.html'))
})

router.get ('/pagina/professor', (req, res) => {
    res.sendFile(path.resolve('./public/paginaprof.html'))
})
router.get ('/pagina/aluno', (req, res) => {
    res.sendFile(path.resolve('./public/paginaaluno.html'))
})

router.get('/api/professor', ProfessorController.showAll);
router.get('/api/aluno', AlunoController.showAll);

// Método POST
router.post('/professor', ProfessorController.create)
router.post('/aluno', AlunoController.create)

// Método PUT
router.put('/professor/:id', ProfessorController.update)
router.put('/aluno/:id', AlunoController.update)

// Método DELETE
router.delete('/professor/:id', ProfessorController.delete)
router.delete('/aluno/:id', AlunoController.delete)

router.use (function (req, res, next){
    res.status(404).sendFile(path.resolve('./public/404.html'))
})

module.exports = router