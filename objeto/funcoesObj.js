const pessoa = {
    nome: 'Rebeca',
    idade: 3,
    peso: 23
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => { 
    console.log(`${e[0]}: ${e[1]}`)
});

Object.defineProperty(pessoa, 'dataNascimento',
{
    enumerable: true,
    writable: false,
    value: '01/01/2020'
})

pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// object.assign ( ECNascript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c : 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

