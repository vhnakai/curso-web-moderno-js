const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bd = require('./BD')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res , next) => {
    res.send(bd.getProdutos()) //converter para json
})

app.get('/produtos/:id', (req,res,next) =>{
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req,res,next)=>{
    const produto = bd.setProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req,res,next)=>{
    const produto = bd.setProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req,res,next)=>{
    const produto = bd.delProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor executado na porta ${porta}.`)
})
