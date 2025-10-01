
function somar(valor1) {
    return valor1 + valor1;
}

const somando = vl1 => vl1 + vl1;

var nome = 'felipe'
var nome = 'Pamela'

let idade = 10;
idade = 20;

const nome2 = 'simone'
// nome2 = 'claudiane' // ERRADO

if(true) {
    // const idade = 10;
    // console.log('Variavel', idade)
}

let dadosApi = []
// dadosApi = 'Carregando...'
// dadosApi = dadosCarregados


const listaNome = [{}, {}]


let titulo = 'Serratec'
let newTitulo = titulo.replace('Serra', 'Mar')

console.log(newTitulo.length)

let queroUmNumero = '10'
let valorConvertido = parseInt(queroUmNumero)

let idNumber = 1
let idString = '1'

if(idNumber === Number(idString)) {
    console.log(true)
} else {
    console.log(false)
}

const arrayFrutas = [
    {
        id: '1',
        nome: 'laranja'
    },
    {
        id: 2,
        nome: 'morango'
    }
]

const novoArray = arrayFrutas.filter(fruta => fruta.id === '1')

const user = [
    {
        email: 'teste@email.com',
        senha: 123
    }, 
    {
        email: 'teste2@email.com',
        senha: 123
    }
]

let emailRecebido = 'teste3@email.com'
let senhaRecebida = 123

const validandoUsuario = user.find(user => user.email === emailRecebido && user.senha === senhaRecebida)

if(validandoUsuario) {
    console.log('validandoUsuario', validandoUsuario)
} else {
    console.log("Nao existe")
}

function pegarAgua(beberAgua) {}