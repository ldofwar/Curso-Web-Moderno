const notas = [5.1, 6.8, 7.0, 7.5, 8.0, 3.2, 2.6, 9.4, 6.9, 9.0]

//Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)
 
//Com Callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7

const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)