import { GetAlunos } from '../../services/GetAlunos.jsx';
import { useEffect, useState } from 'react';
import { CardUser } from './style.jsx';
import { Button } from '../../components/Button/index.jsx';
import { useAuth } from '../../contexts/useAuth.jsx';

export const Home = () => {

  const { name } = useAuth();
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function carregarInformacoes() {
    setIsLoading(true);

    const response = await GetAlunos();

    if(response.status !== 200) {
      console.log('Erro ao carregar as informacoes da API')
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setAlunos(response.data);
      setIsLoading(false);
    }, 5000);
  }

  useEffect(() => {
    carregarInformacoes();
  }, []);
  
  return (
    <div>
      <h5>Bem vindo {name}</h5>

      {!isLoading && alunos.length === 0 && (
        <>
          <h1>Sem alunos para exibir no momento!</h1>
        </>
      )}

      {isLoading && (
        <>
          <span>Carregando...</span>
        </>
      )}

      {alunos.map((aluno) => (
        <CardUser>
          <span>Nome: {aluno.nome}</span>
          <span>Trabalho: {aluno.job}</span>
          <span>Contato: {aluno.email}</span>
        </CardUser>
      ))}
      
    </div>
  )
}
