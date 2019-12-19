//função em JS é first-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() {}
//Armazenar em uma variavel 
const fun2 = function () { }

//armazenar em um array
const array = [function (a ,b) {return a +b}, fun1, fun2]

//armazenar em um atributo de objeto
const obj = {}
obj.falar =  function () {return 'opa'}

//Passar função como param
function run(fun){
    fun()
}

//um função ode retornar/conter um função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)