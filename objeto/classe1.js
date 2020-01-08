class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes 
        this.ano = ano
        this.Lancamento = []
    }

    addLancamentos(...Lancamento){
        Lancamento.forEach(l => this.Lancamento.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.Lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 2000)
const contaDeluz = new Lancamento('Luz', -120)

const conta = new cicloFinanceiro(1, 2020)
conta.addLancamentos(salario,contaDeluz)
console.log(conta.sumario())