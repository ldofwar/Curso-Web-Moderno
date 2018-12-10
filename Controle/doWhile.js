function getAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1

do {
    opcao = getAleatorio(-1, 10)
    console.log('Roll', opcao)
} while (opcao != -1)

console.log('Fim')