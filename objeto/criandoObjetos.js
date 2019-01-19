// criaçao literal de um objeto
const obj1 = {}

console.log(obj1)

//objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funçoes construtoras
function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('Faca', 15.89, 0.08)
const p2 = new Produto ('Garfo', 5.89, 0.05)
console.log(p1.getPrecComDesconto(), p2.getPrecComDesconto())

//Funçao Factory
function criarFuncionario (nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario ('Raimundo', 8500, 2)
const f2 = criarFuncionario ('Janete', 7700, 1)

console.log(f1.getSalario(), f2.getSalario())

// Object.creat
const filha = Object.create(null)
filha.nome = 'Esmeralda'
console.log(filha)
