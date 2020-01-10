// sem promise..
const http = require('http')

const getTurma = (letra , callback) => {
    const url =`http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let result = ''
        res.on('data', dados => {
            result += dados    
           })
        res.on('end', () => {
            callback(JSON.parse(result))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => a.nome))
    console.log(nomes)
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => a.nome))
        console.log(nomes)
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => a.nome))
            console.log(nomes)
        })
    })
})