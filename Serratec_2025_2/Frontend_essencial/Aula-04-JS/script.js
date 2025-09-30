// console.log("Referencia em arquivo separado")

function somar() {};

var nome = "Cristian";

// console.log('Meu nome é', nome)
// console.log('Meu nome é ' + nome)
// console.log(`Meu nome e ${nome}`)

var numeros = [1, 2, 3, 4, 5];
var nomes = ['Miguel', 'Hugo', 'Simone'];

var arrayObjetos = [ { nome: 'Felipe', idade: 32 }, { nome: 'Felipe', idade: 32 } ];

var numeros2 = [6, 7, 8, 9, 10];
// console.log(numeros2);

var valorReal1 = numeros2.pop(); // Pega o ultimo elemento e remove
// console.log(valorReal1);

var valorReal2 = numeros2.shift(); // Pega o primeiro elemento e remove
// console.log(valorReal2);

var valorReal = numeros2.reverse(); // Inverte a ordem do array
// console.log(valorReal);

var juntandoArrays1 = numeros.concat(numeros2); // Juntando dois arrays
// console.log(juntandoArrays1);

var juntandoArrays2 = numeros + ',' + numeros2; // Somando os dois arrays
// console.log(juntandoArrays2);

var arrayDoido = numeros.concat(nomes); // Concatenando numero com string
// console.log(arrayDoido);

// Retorna o indice do array
var numerosComForIn = ['Thais', 'Miguel', 'Cristian', 'Gabriel', 'Pamela']
// for(var index in numerosComForIn) {
//   console.log('Log com for in', index)
// }

// Retorna o valor do array com o for in
var numerosComForeach = ['Nelio', 'Joao', 'Natalia', 'Lorrane', 'Diego']
// for(var index in numerosComForeach) {
//   console.log('Log com in, sendo valores', numerosComForeach[index])
// }

// Retorna o valor do array com for of
var numerosComForeach = ['Serratec', 'Senai', 'Aula', 'Polo', 'Tecnologia']
// for(var valor of numerosComForeach) {
//   console.log('Log com for of', valor)
// }

// Retorna o valor do array
var numerosComForeach = ['William', 'Alex', 'Simone', 'Hyago', 'Cayan']
// numerosComForeach.forEach((valor, index) => {
//   console.log('Log com Foreach', valor, index)
// })

var arrayFrutas = [
  {
    id: 1,
    nome: 'Laranja',
    tipo: 'Citrica',
    cor: 'Amarela',
    preco: 5.99
  },
  {
    id: 2,
    nome: 'Uva',
    tipo: 'Doce',
    cor: 'Verde',
    preco: 14.99
  }
];

// arrayFrutas.map(valor => {
//   console.log("Uso do map", valor)
// })

var novoArray = arrayFrutas.filter(objetoDentroDoArray => objetoDentroDoArray.id === 1);
// console.log('Valor da condicao', novoArray)

var pizzaSendoFeitaNoModoString = '[{ "sabor": "marguerita" }]'
var recebendoPizza = JSON.parse(pizzaSendoFeitaNoModoString);
// console.log('Recebendo', recebendoPizza)

var conferindoPizza = [{ "sabor": "marguerita" }]
var devolvendoPizza = JSON.stringify(conferindoPizza)
// console.log('Enviando', devolvendoPizza)



var nome = 'jesse'
var idade = 20
// Verificando o tipo da variavel
// console.log(typeof(idade))

// if(idade > 18) {
//   console.log("Maior de idade")
// } else {
//   console.log("Menor de idade")
// }

// Tabela ASCII
var nomeTabela = String.fromCharCode(83, 73, 77, 79, 78, 69)
// console.log(`Meu nome e ${nomeTabela}`)

function somar(numero1, numero2) {
  return numero1 + numero2;
}
var resultado = somar(2, 3);
// console.log('resultado', resultado)

// Arrow funcion
const saudacao = () => {
  console.log('Sejam bem vindos')
}

// setTimeout(saudacao, 2500);
// setInterval(saudacao, 1500);

var data = new Date();
var mes = data.getMonth()
var ano = data.getFullYear()
var dia = data.getDate()
var dataCompleta = `${dia}/${mes}/${ano}`

// console.log('data', dataCompleta)

class Turma29 {
  constructor(nome, idade) {
    this.nome = nome,
    this.idade = idade
  }
}

var aluno = new Turma29('Isabella', 20);
// console.log("Aluno", aluno)

class Aluno {
  constructor(obj) {
    obj = obj || {};

    this.nome = obj.nome,
    this.idade = obj.idade,
    this.cidade = obj.cidade
  }
}
