const usuario = getInfo('infoUser');
document.getElementById('profile').innerHTML = `Ola, ${usuario.name}`

function editUser() {
  location.href = "../edit/edit.html"
}

function registerUser() {
  location.href = "../register/register.html"
}

function deleteUser() {
  location.href = "../delete/delete.html"
}

async function getAnime() {

  let baseUrl = "https://dattebayo-api.onrender.com";
  let endpoint = "characters";
  let lista = document.getElementById('lista');

  lista.innerHTML = `<p id="loading">Carregando os dados<p/>`;

  // fetch(`${baseUrl}/${endpoint}`)
  //   .then(resposta => resposta.json())
  //   .then(respostaConvertida => console.log(respostaConvertida))
  //   .catch(error => console.log('Erro ao carregar as informacoes da API', error))

  try {
    let response = await fetch(`${baseUrl}/${endpoint}`);
    let data = await response.json();

    if(data.characters.length > 0) {
      lista.innerHTML = "";

      data.characters.forEach(anime => { 
        lista.innerHTML += 
        `
          <div class="card">
            ${anime.images[0] ? `<img class="profile" src=${anime.images[0]} alt="Imagem de perfil do personagem" />` : ''}
            <p class="text">Nome do anime: ${anime.name ?? ""}</p>
            <p class="text">Data de nascimento ${anime.personal.birthdate ?? ""}</p>
            <p class="text">Clan do personagem ${anime.clan ?? ""}</p>
            <p class="text">Nome do pai do personagem: ${anime.family ? anime.family.father : ""}</p>
            <p class="text">Nome do mãe do personagem: ${anime.family ? anime.family.mother : ""}</p>
          </div>
        `;
      }); 
     
    } else {
      lista.innerHTML = `<p id="loading">Sem informações para exibir<p/>`;
    }

  } catch (error) {
    lista.innerHTML = `<p id="loading">Erro ao carregar os dados<p/>`;
    console.log('Erro ao carregar as informacoes da API', error)
  }
}

getAnime();