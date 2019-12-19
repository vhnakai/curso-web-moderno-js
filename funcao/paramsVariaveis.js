function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(14141 ,soma(12,12),4524))