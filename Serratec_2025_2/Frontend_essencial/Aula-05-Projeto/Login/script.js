

const login = (event) => {
    event.preventDefault();
    
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    
    const data = {
        emailUser: email,
        passwordUser: password
    };

    if(email && password) {
        saveUser(data);
        window.open('../Home/index.html', '_self');
    } else {
        alert('Por favor insira suas credenciais!');
    }
}
