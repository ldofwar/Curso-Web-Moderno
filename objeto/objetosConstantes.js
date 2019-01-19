//pessoa aponta para um lugar na memoria, que este lugar recebe um valor
//pessoa -> 535 -> {...}
const pessoa = {nome: 'Nathy'}
pessoa.nome = 'Rafa'
console.log(pessoa)

// tentando alterar o valor de pessoa, neste caso...
//nao tem como alterar o local para onde a variavel esta apontando
//pessoa = {nome: 'Carol'}

//congela o objeto e nao pode ser modificado
Object.freeze(pessoa) 

pessoa.nome = 'Isabela'
console.log(pessoa)