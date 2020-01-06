// factory simples

function createPessoa() {
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
function createProd( n , prc , mrc){
    return {
        nome: n,
        preco: prc,
        marca: mrc,
        desconto: 0.1
    }
}

console.log(createProd('pendrive',23.45,'sandisk'))