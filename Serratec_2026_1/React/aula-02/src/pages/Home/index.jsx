import { CardSelecoes } from '../../components/CardSelecoes';
import { DadosDaAPI } from '../../data/dados.jsx';
import ImagemCopa from '../../assets/imagemCopa.webp'
import { Banner, Wrapper } from './style.jsx';
import { useState } from 'react'
import { InputField } from '../../components/InputField';

export const Home = () => {

  const [contadorAlunos, setContadorAlunos] = useState(0);
  const [nomeAluno, setNomeAluno] = useState('');
  const [listaVindoApi, setListaVindoApi] = useState([]);
  const [buscaSelecoes, setBuscaSelecoes] = useState('');
  const [formulario, setFormulario] = useState(
    {
      nome: '',
      idade: 0,
      email: ''
    }
  );
  formulario.nome;

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [email, setEmail] = useState('');

  const apiFiltrada = buscarSelecoesTecnicos();

  function contando() {
    setContadorAlunos(prevState => prevState + 1);
    setContadorAlunos(prevState => prevState + 1);
    setContadorAlunos(prevState => prevState + 1);
  };

  function buscarSelecoesTecnicos() {
    const resultado = buscaSelecoes.toLocaleLowerCase();

    return (
      DadosDaAPI.filter(
        nome => nome.selecao.toLocaleLowerCase().includes(resultado) || 
        nome.tecnico.toLocaleLowerCase().includes(resultado)
      )
    )
  }

  return (
    <div>
      <Wrapper>
        <h1>Seleções</h1>
        <Banner src={ImagemCopa} alt="Imagem que exibe a bola da copa do mundo e a taça da copa do mundo" />
      </Wrapper>

      <InputField
        valueInput={buscaSelecoes}
        typeInput="text"
        idInput='search'
        placeholderInput="Digite o nome da seleção ou do técnico..."
        onChangeInput={(e) => setBuscaSelecoes(e.target.value)}
      />

      <InputField
        valueInput={nome}
        typeInput="text"
        idInput='search'
        placeholderInput="Digite o nome da seleção ou do técnico..."
        onChangeInput={(e) => setBuscaSelecoes(e.target.value)}
      />

      <InputField
        valueInput={idade}
        typeInput="text"
        idInput='search'
        placeholderInput="Digite o nome da seleção ou do técnico..."
        onChangeInput={(e) => setBuscaSelecoes(e.target.value)}
      />

      <InputField
        valueInput={email}
        typeInput="text"
        idInput='search'
        placeholderInput="Digite o nome da seleção ou do técnico..."
        onChangeInput={(e) => setBuscaSelecoes(e.target.value)}
      />

      {/* <button onClick={contando}>Contar</button>
      <p>Contador de alunos: {contadorAlunos}</p> */}
      
      <CardSelecoes listaSelecoesChegando={apiFiltrada} />
    </div>
  )
}