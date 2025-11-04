import { useState } from 'react';
import { Input } from '../../components/Input';
import { Tasks } from '../../components/Tasks';
import { TarefasApi } from '../../utils/Tarefas';

export const Home = () => {

  const [tarefas, setTarefas] = useState(TarefasApi);
  const [novasTarefas, setNovasTarefas] = useState({ titulo: '', responsavel: '' });

  function cadastrar(){
    if(!novasTarefas.titulo || !novasTarefas.responsavel) return alert('Preencha os campos obrigatorios');

    const adicionandoTarefa = {
      titulo: novasTarefas.titulo,
      responsavel: novasTarefas.responsavel
    }

    setTarefas(tarefasAnteriores => [...tarefasAnteriores, adicionandoTarefa]);
    setNovasTarefas({ titulo: '', responsavel: '' });
  }

  function removerTarefa(recebendoIdDeCadaTarefa) {
    setTarefas(prevState => prevState.filter(tarefa => tarefa.id !== recebendoIdDeCadaTarefa));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      Bem vindo a Home

      <Input 
        // funcaoVindaPorProps={setEmail}
        placeholder={"Digite seu email..."}
        typeComponent="email"
        // value={email}
      />

      <Input
        // funcaoVindaPorProps={setPassword}
        placeholder={"Digite sua senha..."}
        typeComponent="password"
        // value={password}
      />
      <button onClick={cadastrar}>Adicionar nova tarefa</button>

      <Tasks tarefas={tarefas} removerTarefa={removerTarefa} />
    </div>
  )
}
