import React, { useReducer } from "react";
import { Container } from "./style";

export const AulaUseReducer = () => {
  
  function usandoReducer(state, action) {
    switch (action.type) {
      case "aumentar":
        return { count: state.count + 1 };
      case "diminuir":
        return { count: state.count - 1 };
      case "multiplicar":
        return { count: state.count * 2 };
      default:
        return state;
    }
  }

  const estadoReducer = { count: 0 };
  const [state, dispatch] = useReducer(usandoReducer, estadoReducer);

  return (
    <Container>
      <p>Aula useReducer</p>
      <p>Você clicou {state.count} vezes</p>

      <button onClick={() => dispatch({ type: "aumentar" })}>Aumentar</button>

      <button onClick={() => dispatch({ type: "diminuir" })}>Diminuir</button>

    </Container>
  );
};
