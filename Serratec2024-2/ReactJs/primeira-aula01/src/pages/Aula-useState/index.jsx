import React, { useState } from "react";
import { Container } from "./style";

export const AulaUseState = () => {
  const [estadoInicial, setEstadoInicial] = useState(0);

  const aumentarEstadoInicialFormaCallBack = () => setEstadoInicial((prevState) => prevState + 1);
  const diminuiEstadoInicialFormaCallBack = () => setEstadoInicial((prevState) => prevState - 1);

  const aumentarEstadoInicialFormaLiteral = () => setEstadoInicial(estadoInicial + 1);
  const diminuirEstadoInicialFormaLiteral = () => setEstadoInicial(estadoInicial - 1);
  

  return (
    <Container>
      <p>Aula useState</p>
      <p>Você clicou {estadoInicial} vezes</p>

      <button onClick={aumentarEstadoInicialFormaLiteral}>Aumentar literal</button>
      <button onClick={aumentarEstadoInicialFormaCallBack}>Aumentar callback</button>

      <button onClick={diminuirEstadoInicialFormaLiteral}>Diminuir literal</button>
      <button onClick={diminuiEstadoInicialFormaCallBack}>Diminuir callback</button>

    </Container>
  );
};
