const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = funcionario => funcionario.genero === 'F'
const menorSalario = ( funcionario , funcAtual) => {
    return funcionario.salario < funcAtual.salario ? funcionario : funcAtual
} 
const china = funcionario => funcionario.pais === 'China'

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    const func = funcionarios
    .filter(china)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})


