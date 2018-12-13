function soma() {
    let soma = 0 
    for ( i in arguments) {
        soma += arguments [i]
    }
    return soma
}

//Irá realizar a soma dos teste a baixo e exibir o valor
console.log(soma())
console.log(soma(23))
console.log (soma(23, 5, 1, 3))

//Ao passar parametros que nao sejam número, arguments conecta e exibe o resultado
console.log(soma(2, 0, 2.2, 'Marte'))
console.log(soma('Sol', 'Batata', 'HeadShot'))