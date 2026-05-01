const usuario = getInfo('infoUser');
document.getElementById('profile').innerHTML = `Ola, ${usuario.name}`

function editUser() {
  location.href = "../edit/edit.html"
}