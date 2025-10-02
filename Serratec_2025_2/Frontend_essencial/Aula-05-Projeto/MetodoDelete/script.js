const changeUser = async (event) => {
  event.preventDefault();

  let idUser = document.getElementById('idUser').value.trim();

  try {

    const resposta = await fetch(`${base_url}/users/${idUser}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

    if(resposta.status === 200 || resposta.status === 201) {
      alert(`Usuario com id: ${idUser}, foi deletado com sucesso`);
      location.reload();
    } else {
      alert("Não foi possivel deletado o usuario no momento");
    }
    
  } catch (error) {
    alert("Não foi possivel conectar com o servidor");
  }
}
