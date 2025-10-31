
let dadosRecebidos = [];

async function pegarUsuarios() {

    try {

        const resposta = await fetch(`${base_url}/users`);
        const dadosVindoDaApi = await resposta.json();
        dadosRecebidos = dadosVindoDaApi;
        
    } catch (error) {
        alert('Não foi possivel buscar os usuarios no servidor.');
    }
}

const login = async (event) => {
    event.preventDefault();
    
    let nomeDigitado = document.getElementById('nome').value.trim();
    let sobrenomeDigitado = document.getElementById('sobrenome').value.trim();

    if(dadosRecebidos.length === 0) {
        await pegarUsuarios();
    }

    const validandoUser = dadosRecebidos.find(user => user.nome === nomeDigitado && user.sobrenome === sobrenomeDigitado);

    if(validandoUser){ 
        saveUser(validandoUser);
        window.open('../Home/index.html', '_self');
    } else {
        alert('Por favor insira suas credenciais!');
    }
}

const redirectRegister = () => {
    window.open("../MetodoPost/index.html", "_self");
}

pegarUsuarios();