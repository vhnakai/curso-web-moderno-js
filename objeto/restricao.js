// object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco : 199, 
    tag: 'promocao'
})

console.log('extensivel:', Object.isExtensible(produto))
produto.descricao = 'Boracha'
delete produto.tag
console.log(produto)

//object.seal

const pessoa = { nome: 'Juliana', idade: 24}
Object.seal(pessoa)
delete pessoa.nome
pessoa.nome = 'katia'
console.log('Selado:', Object.isSealed(pessoa))
console.log(pessoa)

//object.freeze = selado  valor constante
