// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'rua ABC',
        numero: 10   
    }
}

const { nome, idade } = pessoa
console.log(nome , idade)

const { nome: n, idade: i } = pessoa

console.log(n, i)

