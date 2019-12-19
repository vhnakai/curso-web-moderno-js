//estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a||1
    b = b||1
    c = c||1
    return a + b + c 
} 

//estrategia 2 , 3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1  in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

//valor padrão do es
function soma3 ( a = 1 , b = 1 ,c = 1){
    return a + b + c
}