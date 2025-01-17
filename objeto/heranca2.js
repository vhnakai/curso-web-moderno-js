// Cadeia de prototipos {prototype chain}
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
//console.log(filho.attr1)

const carro = {
    velAtual : 0,
    velMax: 220,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual= this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo ={
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

//console.log(ferrari)
//console.log(volvo)

volvo.acelerarMais(400)
console.log (volvo.status())

ferrari.acelerarMais(400)
console.log (ferrari.status())
