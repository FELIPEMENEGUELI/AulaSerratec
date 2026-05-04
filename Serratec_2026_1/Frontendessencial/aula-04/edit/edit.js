
async function updateUser() {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const usuario = getInfo('infoUser');
  const id = usuario.id;

  if(!email && !password) {
    alert('Preencha as informações para editar seu perfil.')
  }

  const user = {
    email,
    password
  }

  try {

    const response = await fetch(`${base_url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    });

    location.href = "../home/home.html";
    console.log('Editou com sucesso', response);
  }

  catch(e) {
    alert('Não foi possivel alterar os dados nesse momento, tente mais tarde.');
  }
}