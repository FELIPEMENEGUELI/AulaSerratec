const base_url = "https://68dda3c6d7b591b4b78cfc19.mockapi.io"

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

// Exemplos de criação de função
function funcaoNormal() {}
const funcaoSeta = () => {}
async function funcaoNormalAssincrona() {}
const funcaoSetaAssincrona = async () => {}