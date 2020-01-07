// pessoa -> 123 -> {...}
const pessoa = {
    nome: 'Joao'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} (X)
//pessoa = {nome: 'ANA'}

Object.freeze(pessoa) // congela qualquer alteração

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante  = Object.freeze({nome: 'uwu'})
console.log(pessoaConstante.nome)