const valores = [2.2, 3.21, 5.9, 1.8] //array
console.log(valores[0], valores[3])
console.log(valores[4])

valores [4] = 3.3
console.log(valores)
console.log(valores.length)

valores.push({id:9}, false, null, "teste")
console.log(valores)

//exluido valores de um array
console.log(valores.pop())

delete valores[0]
console.log(valores)

//tipo de um array
console.log(typeof valores)