function register(event) {
  event.preventDefault();

  let nome = document.getElementById('nome').value.trim();
  let sobrenome = document.getElementById('sobrenome').value.trim();
  let genero = document.getElementById('genero').value.trim();
  let trabalho = document.getElementById('trabalho').value.trim();

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

  fetch(`${base_url}/users`, {
    method: 'POST',
    body: convertJson,
    headers: {
      'Content-type': 'application/json'
    }
  }).then((resposta) => {
    
    if(resposta.status === 201) {
      alert("Usuario criado com sucesso");
      location.reload();
    } else {
      alert("Não foi possivel criar o usario");
    }

  }).catch(() => {
    alert("Não foi possivel conectar com o servidor");
  })
}

async function registerAssincrono(event) {
  event.preventDefault();

  let nome = document.getElementById('nome').value.trim();
  let sobrenome = document.getElementById('sobrenome').value.trim();
  let genero = document.getElementById('genero').value.trim();
  let trabalho = document.getElementById('trabalho').value.trim();

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

    const resposta = await fetch(base_url, {
      method: 'POST',
      body: convertJson,
      headers: {
        'Content-type': 'application/json'
      }
    })

    if(resposta.status === 201) {
      alert("Usuario criado com sucesso");
      location.reload();
    } else {
      alert("Não foi possivel criar o usario");
    }
    
  } catch (error) {
    alert("Não foi possivel conectar com o servidor");
  }
}