function getPreco(imposto =0, moeda ="R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto ={
    nome: "Celular",
    preco: 1200,
    desc: 0.10,
    getPreco
}

global.preco = 90
global.desc = 0.104
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 432.000, desc: 0.15}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.14, "$"))
console.log(getPreco.apply(carro, [0.14, "$"]))