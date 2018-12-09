//Novo recurso do ES2015

const pessoa = {
    nome: 'Amanda',
    idade: 35,
    endereco: {
        Rua: 'JARDIM',
        numero: 561
    }
}

const{ nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {Rua, numero, cep}} = pessoa
console.log(Rua, numero, cep)
