class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log('meu nome é ${this.nome}')
    }
}

const p1 = new Pessoa('João')
p1.falar()

const pessoa = nome => {
    return{
        falar: () => console.log('meu nome e ${nome}')
    }
}

const p2 = new Pessoa('João')
p2.falar()
