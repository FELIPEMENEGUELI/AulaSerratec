import {Container} from  './style'
import { useState } from "react"

export const AulaComponenteDecisao = () => {

  const [carregando, setCarregando] = useState('Esperando');

  const DecisaoComponente = ({status}) => {
    switch(status) {
      case 'loading' :
        return <p>Carregando</p>
      case 'sucess' :
        return <p>Sucesso</p>
      case 'error' :
        return <ComponenteError />
      default :
       return <p>Status não reconhecido</p>
    }
  }

  const ComponenteError = () => {
    return <p>Componente de erro</p>
  }

  return (
    <Container>
      Ola
      <DecisaoComponente status={carregando}/>
      <button onClick={() => setCarregando('error')}>Trocar status</button>
    </Container>
  )
}



