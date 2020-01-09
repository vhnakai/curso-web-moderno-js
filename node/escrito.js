const fs = require('fs')

const produto ={
    nome: 'celular',
    preco: 1111,
    descoto: 0.12
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo')
})