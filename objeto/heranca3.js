const pai = { nome : 'pedro', corcabelo: 'preto'}
const filha1 = Object.create(pai)
//filha1.nome = 'Ana'
console.log(filha1.corcabelo)

const filha2 = Object.create(pai, {
    nome:{value: 'Bia',writable: false,enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corcabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))