function criarProduto(nome, preco){
    return{
        nome, preco, deconto: 0.01
    }
}
console.log(criarProduto("agua", 2.50))
console.log(criarProduto("Suco", 4.89))
