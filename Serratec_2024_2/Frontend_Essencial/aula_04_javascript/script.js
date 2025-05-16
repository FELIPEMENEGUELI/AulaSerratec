// document.getElementById('nomeTeste').innerHTML = `Meu nome é ${nome}, com sobre nome ${sobreNome} e minha idade é ${idade}`

// C -> CREATE ->  -> RAFAEL FREI (ID =2)
// R -> READ -> GET -> RAFAEL FREI, MARINA MAYUMI
// U -> UPDATE -> POST / PUT -> ID=2 -> RAFAEL FREIRE
// D -> DELETE -> DELETE -> RAFAEL FREIRE

// R -> READ -> GET -> MARINA MAYUMI

// fetch() -> Forma de fazer solicitações a uma API

// var nome = 'felipe'
// let sobreNome = 'menegueli'
// const nome2 = 'ferreira'

// console.log(nome);

// console.log(sobreNome);

// {
//   console.log('Nome dentro do bloco de codigo')
// }

// Utilizando if e else
// if(nome == 'ferreira') {
//   console.log('O nome esta errado')
// } else if(nome == 'menegueli') {
//   console.log('O nome esta incorreto')
// } else {
//   console.log('o nome esta certo')
// }

// bloco de codigo para numeros pares
// {
//   console.log(2)
//   console.log(4)
//   console.log(6)
//   console.log(8)
//   console.log(10)
// }

// bloco de codigo para numeros impares
// {
//   console.log(1)
//   console.log(3)
//   console.log(5)
//   console.log(7)
//   console.log(9)
// }
// Janela do browser
// window

// Documento do browser
// document

// var nome = 'Ana ferreira da silva santos'

// console.log(nome.replace('da silva', 'duarte'))

// var nome = "Laiz"
// var sobreNome = "Freire"
// var idade = 25

// console.log(`Meu nome é ${nome}, com sobre nome ${sobreNome} e minha idade é ${idade}`)

// for(var i = 1; i <=10; i++) {
//   console.log(`Numero: ${i}`)
// }

// var contador = 1
// while(contador <= 10){
  // console.log(`Numero do while: ${contador}`)
//   contador++;
// }

// do {
//   console.log(`Numero do: do while: ${contador}`)
//   contador++;
// } while(contador <= 10)

// function dizerOla() {
//   var pegar = window.location.pathname;
//   console.log("Localização: ", pegar)
//   console.log("Localização: " + pegar)
//   console.log(`Localização: ${pegar}`)
// }

// const dizerOla2 = () => {
// }

// document.getElementById('nomeTeste').innerHTML = "Titulo"

// arrow function

// function forma1() {}
// const forma2 = () => {}

// document.getElementById("buttonLogin").addEventListener('click', () => {
//   alert('Teste com arrow function');
//   console.log('Testando arrow')
// });

// Operadores

// var nome = "eduardo"
// if(nome == 'eduardo'){} // operador de igualar

// if(nome != 'eduardo'){} // operador diferente

// var idade = 10
// if(idade <= 10){} // operador diferente

// operador curto-circuito -> short curt
// if(nome == 'eduardo' && idade == 10){}


// operador ternario
// const novoNome = nome ? true : false
// Mesma ideia do if abaixo
// if(nome) {
//   true
// } else {
//   false
// }


// const pessoa = {
//   nome: "Naruto",
//   idade: 16,
//   sobreNome: 'Uzumaki',
//   paixonite: 'Sakura',
//   amorDaVida: "Sasuke",
//   endereco: {
//     bairro: "Konoha",
//     cidade: "Konoha-jin"
//   }
// }

// console.log(pessoa.endereco.cidade)

// const receitas = ['Presunto', 'Queijo', 'Oregano', 'Cream cheese']
// const novosIngredientes = ['Refrigerante', 'Suco']
// const novosIngredientes1 = ['Gelo']
// console.log(receitas[2]) // pegando por posições
// console.log(receitas.concat(novosIngredientes, novosIngredientes1)) forma de juntar arrays
// receitas.push('Alho torrado') insere como ultimo elemento
// receitas.unshift('Cebola') insere como primeiro elemento do array
// receitas.shift() removendo nosso primeiro elemento do array
// receitas.pop() remove o ultimo elemento do array
// console.log(receitas)

// function somar(numero1, numero2) {
//   return numero1 + numero2;
// }

// console.log(somar(2, 3));

// const nameUser = 'PatrickRamosTI'
// fetch(`https://api.github.com/users/${nameUser}`)
//   // -> try
//   .then(response => {
//     if(response.status == 200){
//       return response.json();
//       // console.log('Resposta', response.json())
//     }
//   }).then(dados => {
//     console.log('Dados', dados)
//   })

//   .catch(error => console.log(error)) // catch
//   // .catch((error) => { console.log(error) }) // catch
