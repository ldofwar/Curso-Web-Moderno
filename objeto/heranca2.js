
const avo = {
    attr1: 'A'
}

const pai = {
    __proto__: avo,
    attr2: 'B',
    attr3: '3'
}

const filho = {
    __proto__: pai,
    attr3:  'C'
}

console.log(filho.attr1, filho.attr0)
console.log(filho.attr2)
console.log(filho.attr3)

//Exemplo 2
const carro = {
    velAtual: 0,
    velMax: 330,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status () {
        return `${this.modelo}: ${this.velAtual}Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'Z4',
    velMax: 350
}

const volvo = {
    modelo: 'Y64',
    status(){
        return `${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(128)
console.log(volvo.status())

ferrari.aceleraMais(231)
console.log(ferrari.status())