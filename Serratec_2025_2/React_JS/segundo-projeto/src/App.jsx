import FotoFlorAmarela from './assets/photo.jpg';
import FotoFlorRosa from './assets/photo1.jpg';
import ComponenteDeBotao from './components/ComponenteDeBotao/ComponenteDeBotao.jsx';
import { ComponenteDeEntrada } from './components/ComponenteDeEntrada/ComponenteDeEntrada.jsx';
import { ComponenteDeEntradaRecebendoFilho } from './components/ComponenteDeEntradaRecebendoFilho/ComponenteDeEntradaRecebendoFilho.jsx';
import { ComponenteDeFoto } from './components/ComponenteDeFoto/ComponenteDeFoto.jsx';


import { useState } from 'react'

const App = () => {

  const [contando, setContando] = useState(0);

  function funcaoParaSomar() {
    // setContando(contando + 1);
    // setContando(contando + 1);
    setContando(prevState => prevState + 1)
    setContando(valorAnterior => valorAnterior + 1)
  }

  return (
    <div>
      {/* Bem vinda, {nome} */}
      {/* <ComponenteDeFoto informacaoAlterada="Novo titulo" /> */}
      {/* <ComponenteDeFoto fotoRecebida={FotoFlorRosa} /> */}
      {/* <ComponenteDeFoto informacaoAlterada="Novo titulo do joao" /> */}
      {/* <ComponenteDeFoto fotoRecebida={FotoFlorAmarela} /> */}

      <ComponenteDeBotao />
      <ComponenteDeBotao title="Logout" foto={FotoFlorRosa} />

      <ComponenteDeEntradaRecebendoFilho>
        <span>Filho do Componente de Entrada</span>
      </ComponenteDeEntradaRecebendoFilho>

      <ComponenteDeEntrada propsPlaceHolder="Digite seu email.." />


      <p>contador: {contando}</p>

      <button onClick={funcaoParaSomar}>Contar</button>
    </div>
  )
}

export default App;