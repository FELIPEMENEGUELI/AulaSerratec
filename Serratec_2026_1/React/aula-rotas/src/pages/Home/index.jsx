import { useLocation, useParams } from 'react-router';
import { GetAlunos } from '../../services/GetAlunos.jsx';
// import { Header } from '../../components/Header';

export const Home = () => {

  const location = useLocation();
  const { nome } = location.state || '';
  const { id } = useParams();

  async function loadInfo() {

      const response = await GetAlunos();

      if(response.status !== 200) {
        console.log('Erro ao carregar as informacoes da API')
      }

      console.log('Informacoes da API de novo', response.data);
  }

  return (
    <div>
      {/* <Header /> */}
      <h1>Home</h1>
      <h5>Bem vindo, {nome}</h5>
      {id && (
        <h5>Id do usuario {id}</h5>
      )}

      <button onClick={loadInfo}>Carregar informacoes</button>

    </div>
  )
}
