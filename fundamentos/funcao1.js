// Função sem retorno 
console.log("===Função sem retorno===")
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(21, 36)
imprimirSoma(2)

//Função com Retorno
console.log("===Função com retorno===")
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3)) //valor de A + B
console.log(soma(2)) //valor de A
console.log(soma()) // NAn