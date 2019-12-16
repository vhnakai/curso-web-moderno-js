//função 1 sem retorno
function imprimirSoma(a, b){
    console.log(a +b)
}

imprimirSoma(2,3)
imprimirSoma(2) //execulta , mas dá  NAN
imprimirSoma(2, 3 ,  4 , 5) //ignora os outros parametros
imprimirSoma() //execulta , mas dá NAN

//function com retorno
function soma(a = 1 , b = 1){ 
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) //nao retorna NaN por ter tratado os dois valores com '= 1' , definindo os valores antes
 