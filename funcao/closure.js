/*Closure é o escopo criado quando uma função é declarada
Esse escopo permite a função acessar e manipular variáveis à função

Contexto léxico em ação!
*/

const x = "Global"

function fora(){
    const x = "Local"
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()

// retorno do valor da  função 
console.log(minhaFuncao())

// retorno do valor do contexto global
console.log(x)