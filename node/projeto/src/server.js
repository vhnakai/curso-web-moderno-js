const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res , next) => {
    res.send({nome: 'Notebook', preco:1234.50}) //converter para json
})

app.listen(porta, () => {
    console.log(`Servidor executado na porta ${porta}.`)
})
