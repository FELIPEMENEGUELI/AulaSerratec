function entrar() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;
    localStorage.setItem('@meulogindeacesso', email);
    localStorage.getItem('@meulogindeacesso');
    localStorage.removeItem('@meulogindeacesso');
}