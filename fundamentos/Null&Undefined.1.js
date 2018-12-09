//Primeira parte da aula no browser
console.log("====Primeira parte====")

const a = {nome: "teste"}
console.log("Primeiro Valor de A: ", a)

const b = a
b.nome = "opaa"
console.log("Valor de B: ", b)
console.log("Segundo Valor de A: ", a) //valor de A tbm mudou

let c = 3
let d = c
d++
console.log("Valor de C: ", c)
console.log("Valor de D:", d)

//Segunda parte da aula na IDE
console.log("====Segunda parte====")
let valor
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 5.68
console.log(produto)

produto.preco = undefined // Forma errada
console.log(!!produto.preco) //valor boolean
console.log(produto)

produto.preco = null // Forma correta
console.log(!!produto.preco) //valor boolean
console.log(produto)