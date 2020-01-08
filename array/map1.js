const nums = [1,2,3,4,5]

//for com proprosito
let result = nums.map(function(e) {return e * 2})
console.log(result)

const x10 = e => e * 10
result = nums.map(x10)
console.log(result)