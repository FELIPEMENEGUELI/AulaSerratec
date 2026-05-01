async function login() {
  await getData();

  const valueEmail = document.getElementById("email").value;
  const valuePassword = document.getElementById("password").value;

  if(!valueEmail && !valuePassword) {
    alert('Preencha as informações para poder realizar o login!!');
  };

  const aluno = alunos.find(aluno => aluno.email === valueEmail && aluno.password === valuePassword);

  if(aluno){
    saveInfo('infoUser', aluno);
    window.open("../home/home.html", "_self");
    
  } else {
    alert('Login invalido');
  }
};

function logOut() {
  deleteInfo('emailUser')
};
