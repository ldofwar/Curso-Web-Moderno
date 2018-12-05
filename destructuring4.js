function rand ([ min = 0, max = 100]) {
    if ( min > max ) [ min, max ] = [ max, min ]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([30, 56])) //valores entre maximo e minimo (30 e 56).
console.log(rand([85])) // valores acima de 85, entre 85 e 100
console.log(rand([, 28])) // valores a baixo de 28, entre 0 e 28
console.log(rand([])) //valores entre min e maximo, (0 e 100)
//console.log(rand()) //gera um erro