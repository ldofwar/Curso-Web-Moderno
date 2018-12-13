//Função que se comporta de alguma forma inesperada
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log('Aréa maior que o necessário', area,'m2')
    } else {
        return console.log('Aréa de ', area,'m2')
    }
}

console.log(area(2,5))
console.log(area(7))
console.log(area())
console.log(area(7, 2, 4, 6))
console.log(area(9, 4))