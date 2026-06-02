import { CardSelecoes } from '../../components/CardSelecoes/index.jsx';
import { DadosDaAPI } from '../../data/dados.jsx';
import { FaBeer } from "react-icons/fa";

export const Home = () => {

  return (
    <div>
      <h1>Bem vindo ao curso de React, na pagina Home!</h1>

      <h1>Seleções</h1>
      <FaBeer color='blue' size={20}/>

      <CardSelecoes data={DadosDaAPI} />

    </div>
  )
}
