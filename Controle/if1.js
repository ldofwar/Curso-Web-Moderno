function boaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

boaNoticia(8)
boaNoticia(3)

//Exemplo 2
function seVerdadeEuFalo(falar){
    if(falar) {
        console.log('É verdade...' + falar)
    }
}

seVerdadeEuFalo() //false
seVerdadeEuFalo(null) //false
seVerdadeEuFalo(undefined) //false
seVerdadeEuFalo(NaN) //false
seVerdadeEuFalo('') //true
seVerdadeEuFalo(0) //false
seVerdadeEuFalo(1) //true
seVerdadeEuFalo(-3) // true
seVerdadeEuFalo(' ') // true
seVerdadeEuFalo('?') //true
seVerdadeEuFalo([]) //true
seVerdadeEuFalo([1, 4]) //true
seVerdadeEuFalo({}) //true