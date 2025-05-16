import { useState } from "react";
import { Container } from './style';

export const AulaImutabilidadeObjetos = () => {

  const [user, setUser] = useState({
    name: 'Marina',
    age: 25,
  });

  const alterarNome = () => {
    setUser({
      ...user, 
      name: 'Gabi'
    })
  }

  return (
    <Container>
        Aula-ImutabilidadeObjetos
        nome: {user.name}
        <button onClick={alterarNome}>Alterar nome</button>
    </Container>
  );
};
