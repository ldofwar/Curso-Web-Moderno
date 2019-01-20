// Exemplo 1
const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
console.log(obj1)

const obj2 = { a, b, c }
console.log(obj2)

// Exemplo 2
const nomeAttr = 'nota'
const valorAttr = 8.5

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

// Exemplo 3
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// Exemplo 4
const obj5 = {
    funcao1: function() {
        console.log('Função 1')
    },
    funcao2 () {
        console.log('Função 2')
    }
}
console.log(obj5)