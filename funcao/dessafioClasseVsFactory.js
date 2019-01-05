/*class pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log('Meu Nome é', this.nome)
    }
}
const p1 = new pessoa('Paulo')
p1.falar()
*/

//Minha resoluçao
function pessoa1(nome) {
    return{
        falar1: () => console.log('Meu Nome é',nome)
        
    }
}
const p1 = new pessoa1 ('Maria')
p1.falar1()
const p2 = new pessoa1 ('Joaquim')
p2.falar1()

//Correção
function pessoa2(nome){
    this.nome = nome

    this.falar2 = function() {
        console.log('Meu Nome é', this.nome)
    }
}
const p3 = new pessoa2('José Carlos')
p3.falar2()