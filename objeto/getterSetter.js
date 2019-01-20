const sequencia = {
    _valor: 1, // inicio da sequencia
    get valor () {return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor)


//nao é permitido alterar para um valor menor
sequencia.valor = 5 
console.log(sequencia.valor, sequencia.valor)