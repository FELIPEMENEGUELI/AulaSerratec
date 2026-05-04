
async function deleteUser() {

  const usuario = getInfo('infoUser');
  const id = usuario.id;

  if(!id) {
    alert('Usuario não encontrado')
  }

  try {

    const response = await fetch(`${base_url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
    });

    deleteInfo('infoUser');
    location.href = "../login/login.html";

    console.log('Usuario deletado com sucesso', response);
  }

  catch(e) {
    alert('Não foi possivel deletar os dados nesse momento, tente mais tarde.');
  }
}