const pessoa = {
    nome: 'Léo',
    idade: 21,
    peso: 68,
}

console.log(Object.keys(pessoa), Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {

    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '04/06/1997'
})

//tentando altera o valor da data de nascimento
pessoa.dataNascimento = '05/03/1997'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing 
const dest = { a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
