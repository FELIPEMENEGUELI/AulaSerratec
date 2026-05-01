function login() {
  const valueEmail = document.getElementById("email").value;

  if(valueEmail === 'teste@123.com'){
    saveInfo('emailUser', valueEmail);

  } else {
    alert('Login invalido')
  }
  // console.log(`Email: ${valueEmail}, Senha: ${valuePassword}`)
};

function getInfo(key) {
  const getInfos = localStorage.getItem(key);
  const valueParse = JSON.parse(getInfos);
  return valueParse;
};

function logOut() {
  deleteInfo('emailUser')
};

function saveInfo(key, value) {
  const valueParse = JSON.stringify(value);
  localStorage.setItem(key, valueParse);
};

function deleteInfo(key) {
  localStorage.removeItem(key);
};

let a = 2;
let b = '2'

let emailRecebido = 'pedro@senai.com.br';
let senhaRecebida = 123;

let users = [
  {
    id: 1,
    nome: 'Pedro',
    time: 'Flameguista',
    sofredor: false,
    email: 'pedro@senai.com.br',
    senha: 123
  },
]

const verificandoUsuario = users.find(user => user.email === emailRecebido && user.senha === senhaRecebida)
// console.log(verificandoUsuario)

const user = getInfo('emailUser');
document.getElementById('nome').innerHTML = `Seja bem vindo, ${user}`
console.log('Informacoes do usuario', user)