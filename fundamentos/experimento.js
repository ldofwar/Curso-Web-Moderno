let a = 3

global.b = 123

this.c = 954
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.d)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando variavel sem var e let (forma errada)! 
abc = 3
console.log(global.abc)
