//function declaration
console.log(soma(5, 2))
//podemos chamar a funçao antes da linha onde foi adicionado a function soma.
function soma(x, y){
    return x + y
}

//function expression
//a função nao pode ser chamada antes da linha onde foi adicionado o valor a constante sub.
const sub = function(x, y) {
    return x - y
}
console.log(sub(5,2))

//named function expression
//so pode ser chamada depois de ser acionado o valor a constante mult.
const mult = function mult(x, y){
    return x * y
}
console.log(mult(5,2))