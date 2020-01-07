// Usando a notação literal 
const obj1 = {}
console.log(obj1)

// Objeto em Js
const obj2 = new Object
console.log(obj2)

// Função construtoras
function Produto(nome, preco, desc){
    this.nome = nome,
    this.getPrecoConDesconto = () => {
        return preco* ( 1 - desc)
    }
}

const p1 = new Produto('Caneta', 12.12, 0.15)
//p1.nome = 'Lapis'
console.log(p1.getPrecoConDesconto(), p1.nome)

// Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joão', 6000, 4)
const f2 = criarFuncionario('julia',6771, 2)
console.log(f1.getSalario(), f2.getSalario())

//object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto..
const fromJson = JSON.parse('{"info": "sou um Json"}')
console.log(fromJson.info)