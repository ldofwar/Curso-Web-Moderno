const imprimirResultado = function(nota) {
    if(nota >= 7){
        console.log('Aprovado!!')
    }else{
        console.log('Reprovado.')
    }
}

imprimirResultado(7)
imprimirResultado(6.3)
imprimirResultado('8') // cuidado!
imprimirResultado('opss!') // cuidado!