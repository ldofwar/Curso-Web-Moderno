//Armazenando uma função em uma variável

console.log("==Armazenando uma função em um variável==")
    const imprimirSoma = function (a, b){
     console.log(a + b)
 }
 imprimirSoma(2, 5)

 //Armazenando uma função arrow em um variável
console.log("==Armazenando uma função arrow em um variável==")
    const soma = (a, b) => {
         return a + b
     }
     console.log(soma(8, 3))

     //retorno implícito
console.log("===Retorno Implícito===")
     const subtracao = (a, b) => a - b
     console.log(subtracao(6, 8))