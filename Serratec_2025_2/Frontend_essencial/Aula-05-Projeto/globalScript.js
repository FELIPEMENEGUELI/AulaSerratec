

function saveUser(data) {
    let userJson = JSON.stringify(data);
    localStorage.setItem('@dataUser', userJson);
}

function getUser() {
    let userJson = localStorage.getItem('@dataUser');
    let dataConvert = JSON.parse(userJson);
    return dataConvert;
}

function removeUser() {
    localStorage.removeItem('@dataUser');
}