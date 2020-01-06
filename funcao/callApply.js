function getPreco(imposto =  0, moeda = 'R$'){
    return `${moeda} ${this.preco * ( 1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4599,
    desc: 0.15,
    getPreco
}
console.log(produto.getPreco())

const carro = {
    preco: 49999, desc: 0.2
}
console.log(getPreco.call(carro,0.14,'$'))
console.log(getPreco.apply(produto, [0.14,'$']))