const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'lucas', nota: 4.3, bolsista: true},
    {nome: 'maria', nota: 6, bolsista: false},
    {nome: 'fernando', nota: 8, bolsista: true},
]

const result = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

const todosOsBolsisitas = (result, bolsista) =>result && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosOsBolsisitas))

const algumBolsista = ( result , bolsista) => result || bolsista
console.log(alunos.map(a=> a .bolsista).reduce(algumBolsista))
