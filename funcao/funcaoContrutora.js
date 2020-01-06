function carro( velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0


    //metodo pub
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo pub
    this.getVelocidadeAtual  = function() {
        return velocidadeAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(450 , 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())