// Armazenando uma função em uma variavel
const imprimirSoma = function (a , b) {
    console.log(a +b)
}

imprimirSoma(2,3)

// Armazenando uma funçao arrow em uma variavel
const soma = (a ,b) => {
    return a + b 
}

console.log(soma(2,3))

// retorno  implícito
const substracao = ( a=1, b=0) => a - b
console.log(substracao(2,3))
console.log(substracao())