function logIn() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    const dataUser = {
        emailUser: email,
        senhaUser: senha,
    }

    const dataConvert = JSON.stringify(dataUser);
    localStorage.setItem('@accessLogin', dataConvert);
}

function getUser() {
    let dataUSer = localStorage.getItem('@accessLogin');
    let dataConvert = JSON.parse(dataUSer);

    return dataConvert;
}
