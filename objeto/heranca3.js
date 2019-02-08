const pai = {nome: 'Rafael,', corCabelo:'Preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Bruna' //Alterar o valor do nome (sem sucesso)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome: { value: 'Iza', writable: false, enumerable: true}
})

console.log(filha2.nome)

filha2.nome = 'Roberta' //Alterar o valor do nome (sem sucesso)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//sabendo se os atributos do objeto é dele propio ou foram herdados.
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}