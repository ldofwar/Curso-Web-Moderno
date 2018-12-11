const notas = [6, 0, 5, 3, 1, 7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Ldofwar",
    sobrenome: "Pelé",
    idade: 52,
    peso: 86,
}

for (let atributo in pessoa){
    console.log(atributo, ' = ', pessoa[atributo])
}
