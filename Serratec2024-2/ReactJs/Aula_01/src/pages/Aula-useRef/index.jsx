import { useRef, useState } from "react";
import { Container } from "./style";

export const AulaUseRef = () => {

  // const inputRef = React.useRef() -> Forma antiga de usar um componente nativo
  const inputRef = useRef();

  const botaoCapturarFocus = () => {
    inputRef.current.focus();
  }

  const [timer, setTimer] = useState(0);
  const timerInitial = useRef();

  const darInicioAoTimer = () => {
    timerInitial.current = setInterval(() => {
      setTimer(prevSeconds => prevSeconds + 1)
    }, 1000)
  }

  const pararTimer = () => {
    clearInterval(timerInitial.current)
  }
  
  return (
    <Container>
      <p id="tituloaula">Aula useRef</p>

      {/* <input ref={inputRef} type="text" placeholder="Digite seu email"/>
      <button onClick={botaoCapturarFocus}>click</button> */}

      <h2>Tempo correndo: {timer}</h2>
      <button onClick={darInicioAoTimer}>iniciar</button>
      <button onClick={pararTimer}>pausar</button>

    </Container>
  );
};
