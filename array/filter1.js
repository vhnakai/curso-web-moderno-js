const produtos = [
   
    { nome : 'notebook', preco: 2999, fragil: true },
    { nome : 'Ipad', preco: 7999, fragil: true },
    { nome : 'smartphone', preco: 1999, fragil: true },
    { nome : 'lapis', preco: 2.99, fragil: false },
]

console.log(produtos.filter(function(p){
    return p.preco > 2500
}))

const caro = produto => produto.preco >=500
const fragil  = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))