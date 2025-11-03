import FotoFlorAmarela from './assets/photo.jpg';
import FotoFlorRosa from './assets/photo1.jpg';
import ComponenteDeBotao from './components/ComponenteDeBotao/ComponenteDeBotao.jsx';
import { ComponenteDeFoto } from './components/ComponenteDeFoto/ComponenteDeFoto.jsx';

const App = () => {

  const nome = 'Jessica';

  return (
    <div>
      Bem vinda, {nome}
      {/* <ComponenteDeFoto informacaoAlterada="Novo titulo" /> */}
      {/* <ComponenteDeFoto fotoRecebida={FotoFlorRosa} /> */}
      {/* <ComponenteDeFoto informacaoAlterada="Novo titulo do joao" /> */}
      {/* <ComponenteDeFoto fotoRecebida={FotoFlorAmarela} /> */}

      <ComponenteDeBotao title="Login" />
      <ComponenteDeBotao title="Logout" foto={FotoFlorRosa} />

    </div>
  )
}

export default App;