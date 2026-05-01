var numero1 = 10;
var numero2 = 50;
let numero3 = 100;
let numero5 = 100;

numero2 = 10;
numero3 = 900;

const numero4 = 90;

var resultado = numero1 + numero2 + numero3;

function somar() {
  console.log(numero1 + numero2)
}

if(true) {
  var n1 = 10;
  let n2 = 20;
}

let pessoa = {
  nome: 'Arthur',
  time: 'Flamenguista',
  stack: 'backend'
}

// console.log(pessoa)

let alunos = [
  {
    id: 1,
    nome: 'Marcelo',
    time: 'Flameguista',
    sofredor: false
  },
  {
    id: 2,
    nome: 'Arthur',
    time: 'Fluminense',
    sofredor: true,
    inseridoNoCarrinho: true
  }
]

let tamanhoDoArray = alunos.length;

alunos.push({nome: 'pedro', time: 'Flameguista', sofredor: false, id: 3});
// alunos.reverse();

let ids = alunos.map(aluno => aluno.id);
let verificacao = ids.includes(7);

// if(verificacao) {
//   console.log('O aluno existe')
// } else {
//   console.log('O aluno nao existe')
// }

let filtrandoArrayAlunos = alunos.filter(aluno => aluno.time == 'Flameguista');
let filtrandoArrayPegandoObjeto = alunos.find(aluno => aluno.id == 1);

let aluno = {nome: 'anna', time: 'Flameguista', sofredor: false, id: 4};

let novoArray = [...alunos, aluno];

// console.log(novoArray);

function ola() {
  // setTimeout(() => {
  //   console.log('Seja bem vindo')
  // }, 5000);

  setInterval(() => {
    console.log('Flamengo vai ser campeao da liberta 2026')
  }, 2000);
}

let dataNascimento = new Date();
// let dataCompleta = dataNascimento.getDay() + dataNascimento.getMonth() + dataNascimento.getFullYear();

let valor = 'Leilton ' + dataNascimento.getDay() + '/' + dataNascimento.getMonth() + '/' + dataNascimento.getFullYear();
let valor2 = `Leilton ${dataNascimento.getDate()}/${dataNascimento.getMonth() + 1}/${dataNascimento.getFullYear()}`


console.log(valor2)