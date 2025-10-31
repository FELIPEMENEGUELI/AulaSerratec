const logout = () => {
    removeUser();
    window.open('../Login/index.html', '_self');
}

const loadUser = () => {
    let user = getUser();
    let nome = user.nome;

    if(!nome) return;

    document.getElementById("nameuser").innerHTML = nome;
}

const redirect = () => window.open("../MetodoPut", "_self");
const deleteUser = () => window.open("../MetodoDelete", "_self");



const carregarUsuarios = async () => {
    
    const lista = document.getElementById("listaUsuario");

    lista.innerHTML = `Carregando...`

    try {
        const resposta = await fetch(`${base_url}/users`);
        const dados = await resposta.json();
        
        if(dados.length > 0) {
            lista.innerHTML = ''
            dados.forEach(usuario => {
                lista.innerHTML += `
                    <div>
                        <p>Nome: ${usuario.nome}</p>
                        <p>Sobrenome: ${usuario.sobrenome}</p>
                        <p>Genero: ${usuario.genero}</p>
                        <p>Trabalho: ${usuario.trabalho}</p>
                    </div>
                `
            });
        }

    } catch (error) {
        lista.innerHTML = `Deu erro...`
    }
    
};

window.addEventListener("DOMContentLoaded", carregarUsuarios);
window.addEventListener("DOMContentLoaded", loadUser);