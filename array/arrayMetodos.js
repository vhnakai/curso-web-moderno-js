const pilotos = ['vettel', 'massa', 'Alonso']
console.log(pilotos)

pilotos.pop() //remove o ultimo elemento
console.log(pilotos)

pilotos.push('Vestappen') //adiciona um novo elemento ao final do array
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Fundgi')
console.log(pilotos)

//slice pode adicionar e remover elemento

//adicionar
pilotos.splice(2, 0, 'Lift')
console.log(pilotos)

//remover
pilotos.splice(3 , 1) //removel o quarto elemento
console.log(pilotos)

const algunsPiloto = pilotos.slice(2) //retorna um novo array 
console.log(algunsPiloto)