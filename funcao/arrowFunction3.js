let comparaComthis =  function (param) {
    console.log(this === param)
}

comparaComthis(this) //this é global

const obj = {}

comparaComthis = comparaComthis.bind(obj)
comparaComthis(global)
comparaComthis(obj)

let comparaComthisArrow = param => console.log(this == param)
comparaComthisArrow(global)
comparaComthisArrow(module.exports)
comparaComthisArrow(this)//this é um module.exports

comparaComthisArrow = comparaComthisArrow.bind(obj)
comparaComthisArrow(obj)
comparaComthisArrow(module.exports)