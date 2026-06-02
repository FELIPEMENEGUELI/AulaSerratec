import { CardSelecoes } from '../../components/CardSelecoes/index.jsx';
import { DadosDaAPI } from '../../data/dados.jsx';

export const Home = () => {

  return (
    <div>
      <h1>Seleções</h1>

      <CardSelecoes data={DadosDaAPI}  />
    </div>
  )
}
