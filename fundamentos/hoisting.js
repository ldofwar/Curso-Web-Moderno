
//hoisting: O interpretador  reconhece a variavel 'a' na linha 3 e nao retorna um erro.
//O hoisting o corre com o var, com o let nao temos hoisting.
console.log('a =', a)
var a = 5
console.log('a = ', a)

let b = 2 
console.log('b = ', b)
