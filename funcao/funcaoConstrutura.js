function carro(velocidadeMaxima = 200, delta = 5) {

    // atributo privado 
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico
    this.getvelocidadeAtual = function(){
        return velocidadeAtual
    }
}

// carro popular
const uno = new carro
uno.acelerar()
console.log(uno.getvelocidadeAtual())

//carro de luxo
const civic = new carro(65, 12)
civic.acelerar()
console.log(civic.getvelocidadeAtual())

// Analise de elementos
console.log(typeof carro)
console.log(typeof uno)
console.log(typeof civic)


