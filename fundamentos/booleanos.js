let isAtivo = false
console.log(isAtivo)

//Alterando de falso para verdadeiro
isAtivo = true
console.log(isAtivo)

//confereindo se o valor 1 é verdadeiro ou falso
isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-3)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falsos")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar...")
console.log(!!('' || null || 0 || 'valor'))

//Exemplo prático

let nome = "" //insira o nome entre às ""
console.log(nome || "Desconhecido")