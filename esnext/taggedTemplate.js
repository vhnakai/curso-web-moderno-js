// tagged Template 
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'jao'
const situacao = 'Aprovado'
console.log(tag`${aluno} esta ${situacao}`)