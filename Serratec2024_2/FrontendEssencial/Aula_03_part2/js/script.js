
function login() {
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  // window.location.href = "../html/login.html";
  
  if(name == 'felipe' && password == 123){
    window.open('../html/home.html', '_self');
  } else {
    alert('Credenciais invalidas!');
  }
}