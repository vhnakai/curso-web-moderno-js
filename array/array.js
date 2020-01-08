console.log(typeof Array, typeof new Array, typeof [])
 
let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos']

console.log(aprovados[1])

aprovados[2] = 'joao'
aprovados.push('Giovanna')
console.log(aprovados.length)

aprovados[9] = 'okokokoko'
console.log(aprovados)
console.log(aprovados.length)

aprovados.sort()
console.log(aprovados)


