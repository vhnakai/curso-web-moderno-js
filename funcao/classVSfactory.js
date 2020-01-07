class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const Pessoa = nome => {
    return{
        falar: () => console.log(`meu nome e ${nome}`)
    }
}

const p2 = new Pessoa('leber')
p2.falar()
