let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //retorno implicito

console.log(dobro(4))

let ola =  _ => 'ola' //possui um parametro
let ola =  () => 'ola' //nao chama parametro
console.log(ola())