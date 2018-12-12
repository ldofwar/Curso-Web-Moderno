// Uma função em JS  é conhecida como First-class ou object
//Higher-order function

//Criar uma função de forma literal
function fun1() {

}

//Armazenar em uma variável
const fun2  = function (){

}

//Armazenar em um array
const array = [function(a, b) {return a + b }, fun1]
console.log(array[0] (2,3))

//Armazenar em um atributo de um objeto
const obj = {

}

obj.falar = function () {
    return 'Olá' }
console.log(obj.falar())

//Passar uma função como parametro
function run(fun) {
    fun()
}
run(function () { console.log('Amigo') } )

//Uma função pode armazenar outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(5, 3)(7)
