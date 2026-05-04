
async function registerUser() {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const trabalho = document.getElementById('job').value;

  if(!email && !password && !name && !trabalho) {
    alert('Preencha as informações para cadastrar seu perfil.')
  }

  const user = {
    email,
    password,
    name,
    job: trabalho
  }

  try {

    const response = await fetch(`${base_url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    });

    console.log('Registrado com sucesso', response);
  }

  catch(e) {
    alert('Não foi possivel cadastrar os dados nesse momento, tente mais tarde.');
  }
}