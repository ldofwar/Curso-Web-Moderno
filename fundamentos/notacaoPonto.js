console.log(Math.ceil(6.4))

const obj1 = {}
obj1.nome = 'Carro'
// obj1['nome'] = 'Bola' //tem a mesma funcionalidade de obj1.nome
console.log(obj1.nome)

function obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('EXEC...')
    }
}

const obj2 = new obj('Bike')
const obj3 = new obj('Barco')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()