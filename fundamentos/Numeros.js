const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 8.4
const avaliacao2 = 6.47

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log("Sua nota é:", media.toFixed(2))
console.log("Sua Nota em Binario: ", media.toString(2)) //nota em Binario
console.log(typeof media) //Tipo do Dado
console.log(typeof Number) //Uma função 