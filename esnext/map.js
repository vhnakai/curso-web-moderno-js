const tecno = new Map()
tecno.set('react', { framework: false})
tecno.set('angular',{ framework: true})

console.log(tecno.react)
console.log(tecno.get('react').framework)

const chavesVariadas = new Map([
    [function(){}, 'função'],
    [{}, 'Objeto'],
    [123, 'numero'],
])

chavesVariadas.forEach((vl, ch) => { console.log(ch,vl) })

console.log(chavesVariadas.has(1231))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(1231))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)