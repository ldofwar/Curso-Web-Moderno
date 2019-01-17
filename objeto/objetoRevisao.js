// P.O.O é uma coleçao dinamica de pares chave/valor

const produto = new Object
produto.nome = "Carro"
produto.marca = "Hunda"
produto.modelo = "civic 2019"
produto.preco = 95000

console.log(produto)

//Para deletar atributos
delete produto.preco

console.log(produto)

const carro = {
    modelo: "civic",
    valor: 95000,
    proprietario:{
        nome: "Julio",
        idade: 23,
        endereco: {
            cidade: "pina paió",
            rua: "Joaquim neves",
            numero: 22,
        }
    },
    condutores: [{
        nome: "Heliana",
        idade: 43,
    }, {
        nome: "jonny",
        idade: 23,
    }],

    //Pode ser realizado calculos
    calcularValorSeguro: function () {
        // calculo...
    }
}
console.log(carro)

//Alterando valores 
 carro.proprietario.endereco.numero = 79
 carro.proprietario.endereco.rua = "Rua da varpa"
 
 console.log(carro)

 // Deletando Atributos
 //delete carro.condutores
 delete carro.proprietario.endereco
 delete carro.calcularValorSeguro

 console.log(carro)

 console.log(carro.condutores) //pode ser acessado mas nao esta definido
 console.log(carro.condutores.length) //parra acessar nao deleta o objeto condutores (comenta linha 50)