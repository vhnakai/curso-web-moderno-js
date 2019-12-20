const fabri = ["Mercedes","Honda","Toyota"]

function imprimir(nome, indice){
    console.log(`${indice + 1}.${nome}`)
}

fabri.forEach(imprimir)

fabri.forEach(a => console.log(a))  