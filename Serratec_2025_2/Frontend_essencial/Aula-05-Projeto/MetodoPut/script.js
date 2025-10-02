const changeUser = async (event) => {

  event.preventDefault();

  let nome = document.getElementById('nome').value.trim();
  let sobrenome = document.getElementById('sobrenome').value.trim();
  let genero = document.getElementById('genero').value.trim();
  let trabalho = document.getElementById('trabalho').value.trim();
  let idUser = document.getElementById('idUser').value.trim();

  if(!nome || !sobrenome || !genero || !trabalho) {
    alert("Preencha as informações")
    return;
  }

  const data = {
    nome: nome,
    sobrenome: sobrenome,
    genero: genero,
    trabalho: trabalho
  }

  const convertJson = JSON.stringify(data);

  try {

    const resposta = await fetch(`${base_url}/users/${idUser}`, {
      method: 'PUT',
      body: convertJson,
      headers: {
        'Content-type': 'application/json'
      }
    });

    if(resposta.status === 200 || resposta.status === 201) {
      alert("Usuario alterado com sucesso");
      location.reload();
    } else {
      alert("Não foi possivel criar o usuario no momento");
    }
    
  } catch (error) {
    alert("Não foi possivel conectar com o servidor");
  }
}
