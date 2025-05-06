
const aluna = 'Julya'
// console.log(aluna)

// Template strings, fomras de concatenar variaveis com texto
var materia = 'Frontend Essencial'
// console.log(`Bem vindos a aula de ${materia}`)
// console.log("Bem vindos a aula de " + materia)
// console.log("Bem vindos a aula de ", materia)

var primeiroNome = "Bruno"
primeiroNome = "Adriana"

let outroNome = "Marlos"
outroNome = "Daniel"

const professor = "Enzo"
// console.log("Professor " + professor)

const nomeTabela = String.fromCharCode(101, 40, 70, 90)
// console.log(nomeTabela)

const data = new Date();
// console.log(data)

const pessoa = {
  nome: "Nikolas",
  idade: 20,
  nascimento: "01/01/2000",
  saudacao: function() {
    return "Ola " + this.nome
  }
}

// console.log(pessoa.saudacao())

// const saudacao = (a, b) => {
//   console.log(a + b)
// }

// console.log("A idade do Nikolas é: ", saudacao(10, "felipe"))

// const somar = a, b = a+b

function saudacao(a, b){
  return a + b
}

  var alunos = [
  {
    id: 1,
    nome: "Bruno",
    idade: 20
  },
  {
    id: 1,
    nome: "Leticia",
    idade: 20
  },
  {
    id: 3,
    nome: "Aline",
    idade: 20
  }
]

var novosAlunos = [
  {
    nome: "Iara",
    idade: 20
  }
]

// var newAlunos = alunos.push({nome: "Marlos", idade: 20})

novosAlunos.push({nome: "Adriana", idade: 20})
// console.log("Escreva: ", novosAlunos)

const arrayTeste = [2, 3, 4, 5]
// arrayTeste.unshift(9) // inserindo na primeira posição do array
// arrayTeste.pop() // remove o ultimo elemento 
// arrayTeste.shift() // remove o primeiro elemento
// arrayTeste.reverse() // inverte a ordem do array
// arrayTeste.splice(0, 0, 7) 

var nomes = alunos.map(bananinha => bananinha.nome) //extraindo somente os nomes
var verificandoInfo = nomes.includes("Jose")

// if(verificandoInfo) {
//   console.log("Navegar pra home")
// } else {
//   console.log("Usuario nao existe")
// }

var novoArray = alunos.filter(pegandoID => pegandoID.id === 1)

var arrayTrueOrFalse = alunos.some(pegandoIDS => pegandoIDS.id === 5)

var arrayFind = alunos.find(retornoObjeto => retornoObjeto.id === 1);

var usuarios = [
  {
    name: "Joshua Wiza",
    email: "Uriel.Ward84@example.net",
    avatar: "Invalid faker method - image.people",
    password: "2JH31qMXxJf4sX3",
    background: "Invalid faker method - image.city",
    sobrenome: "Marquardt",
    logradouro: "Zboncak Brook",
    localidade: "Altenwerthburgh",
    estado: "Minnesota",
    role: 56,
    id: "2"
    },
    {
    name: "Mrs. Ruby Klocko",
    email: "Taryn_Emard@example.net",
    avatar: "Invalid faker method - image.people",
    password: 'marquardt',
    background: "Invalid faker method - image.city",
    sobrenome: "Lesch",
    logradouro: "East Avenue",
    localidade: "Port Margot",
    estado: "West Virginia",
    role: 60,
    id: "3"
    }
]

const entrar = () => {
  var emailInput = document.getElementById("emailUser").value;
  var senhaInput = document.getElementById("senhaUser").value;

  var resultadoEmailESenha = usuarios.find(
    usuario => usuario.email === emailInput && 
    usuario.password === senhaInput)

  if(resultadoEmailESenha) {
    console.log('Usuario existe', resultadoEmailESenha)
  } else {
    console.log('usuario nao existe', resultadoEmailESenha)
  }
}

// repositorio julya
// integrantes

// Grupo os malvadesas e malvadoes
// marlos nome branch=> marlos-home
// felipe nome branch => felipe-deletarUser
// iara nome branch => iara-editar-user
// karen lessa nome branch => karen-criar
// julya nome branch => julya-login

// marlos criou a pagina home dele, enquanto isso, os demais estao criando suas paginas
// git push origin marlos-home ira fazer o merge com a develop

// julya fez o commit na sua branch, com suas modificações
// git pull origin develop
// git push origin julya-login, e depois merge com a develop


// {
//   cargo: "Professor",
//   idade: 20,
//   cidade: "Petrópolis"
// }

// fetch(url, {
//   "method": "DELETE"
// })

// CRUD - API
// Criar um usuario    POST
// Deletar um usuario  DELETE
// Buscar um usuario   GET
// Editar              POST, PUT