// const base_url = 'https://66f4ad8277b5e889709a277e.mockapi.io/api/v1'

// fetch(`${base_url}/users`)
//   .then(response => response.json())
//   .then(dados => {
//     if(dados.length > 0) {
//       let listaUsers = document.getElementById('lista');

//       dados.map((batatinha) => {
//         listaUsers.innerHTML +=
//         `
//           <div>
//             <h2>Nome: ${batatinha.name ? batatinha.name : "Usuario sem nome"} </h2>
//             <span> ${batatinha.email ? batatinha.email : "Usuario sem email"} </span>
//           </div>
//         `
//       })

//       // console.log("Dados:", dados)
//     } else {
//       return [];
//     }
//   })
//   .catch(error => console.log(error));

// function carregarDadosApi() {
//   const base_url = "https://narutodb.xyz/api/character";

//   fetch(base_url)
//     .then((resposta) => resposta.json())
//     .then((dados) => {
//       if (dados.characters.length > 0) {
//         let listaUsers = document.getElementById("lista");

//         listaUsers.innerHTML = dados.characters.map(
//           (user) =>
//             `
//           <div>
//             <img src=${user.images ? user.images[0] : "Sem imagem"} alt="foto perfil ninja" />
//             <h2>Nome: ${user.name ? user.name : "Usuario sem nome"} </h2>
//           </div>
//       `
//         );
//         // console.log('dados', dados)
//       }
//     })
//     .catch((error) => console.log(error));
// }

// carregarDadosApi();


const base_url = 'https://66f4ad8277b5e889709a277e.mockapi.io/api/v1/users'

function cadastro(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value

    const user = {
      name: name,
      email: email,
    }

    fetch(base_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(user)
    })
    .then(resposta => resposta.json())
    .then(resultado => alert('Usuario criado com sucesso!', resultado))
    .catch(error => console.log(error))
}

function deletarUsuario(){
  let id = document.getElementById('deletar').value;
  const base_url = `https://66f4ad8277b5e889709a277e.mockapi.io/api/v1/users/${id}`

  fetch(base_url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id })
  })
  .then(response => response.json())
  .then(resultado => alert(`Usuario deletado com sucesso!`))
  .catch(error => console.log(error))
}

// - Fazer get e mostrar no html
// - Fazer um cadastro
// - Fazer um delete
