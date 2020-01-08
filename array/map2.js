const carrinho = [
    '{"nome":"Borracha", "preco": 3.5}',
    '{"nome":"Caderno", "preco": 1.5}',
    '{"nome":"Lapis", "preco": 2.5}',
    '{"nome":"Caneta", "preco": 0.5}'
]

const paraObjeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco

const result = carrinho.map(paraObjeto).map(apenasPreco)

console.log(result)