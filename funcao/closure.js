// Closure é o escopo criaddo quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto lexico

const x = 'Global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())