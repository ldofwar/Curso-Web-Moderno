function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Inicio', 1)
const aula2 = new Aula('fim', 2)
console.log(aula1, aula2)

// Criando função de como funciona o operador NEW
function novo (f, ...params) {
    const obj  = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 12345)
const aula4 = novo(Aula, 'Até breve', 54321)
console.log(aula3, aula4)