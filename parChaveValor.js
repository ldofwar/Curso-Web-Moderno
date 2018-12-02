// par Chave/Valor
const saudacao = 'Fala Bruxo!' //contexto léxico 1
console.log(saudacao)

function exec(){
    const saudacao = 'Fala Peixe!' //contexto léxico 2
    return saudacao
}
console.log(exec())

//Objetos sao grupos alinhados de pares chave/valor
const cliente = {
    nome: 'luiz paulo',
    idade: 23,
    peso: 77,
    endereco: {
        rua: 'Rua da Minha casa',
        numero: 100
    }

}
console.log(cliente)
