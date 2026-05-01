const base_url = "https://69f3d13bbd2396bf531062bf.mockapi.io/alunos"
let alunos = [];

function getInfo(key) {
  const getInfos = localStorage.getItem(key);
  const valueParse = JSON.parse(getInfos);
  return valueParse;
};

function saveInfo(key, value) {
  const valueParse = JSON.stringify(value);
  localStorage.setItem(key, valueParse);
};

function deleteInfo(key) {
  localStorage.removeItem(key);
};

async function getData() {

  try {
    const resposta = await fetch(base_url);

    if(resposta.status !== 200) {
      alert(`Erro ao buscar os dados`);
    }

    const resultado = await resposta.json();
    alunos = resultado;
  }

  catch(error) {
    console.log('Erro ao carregar os dados da API: ', error)
  }
}
