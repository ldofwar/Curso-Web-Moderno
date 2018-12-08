function trataErroELancar(erro) {
    //throw new Error('Ocorreu um erro!')
    //throw 10
    throw 'Erro Numero 642'
    /*throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
    */
}


function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!')
    }catch(e) {
        trataErroELancar(e)
    }finally {
        console.log('final')
    }
}

const obj = {name: 'Renato' } //Erro na variavel nome (name)
imprimirNomeGritado(obj)