require('dotenv').config()
const express = require ('express')
const app = express()

app.use(express.urlencoded({extended: true})) // Serve para aceitar requisições com forms e de corpo
app.use(express.json()) // Serve para aceitar requisições com json

const routes = require('./routes/routes.js')

app.use (express.static('public'))
app.use ('/', routes)

app.listen(process.env.PORT, () => {
    console.log(`Escutando a porta: ${process.env.PORT}`);
})