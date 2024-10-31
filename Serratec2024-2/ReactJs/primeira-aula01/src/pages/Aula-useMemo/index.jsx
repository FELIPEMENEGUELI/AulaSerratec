import { useMemo, useState } from "react";
import { Container } from "./style";

export const AulaUseMemo = () => {

  const frutas = ['Uva', 'Maca', 'Banana', 'Melao', 'Morango', 'Melancia']

  const [valueInput, setValueInput] = useState('')

  const frutasFiltradas = useMemo(() => {
    return frutas.filter(fruta => fruta.toLowerCase().includes(valueInput.toLowerCase()));
  }, [valueInput]);

  return (
    <Container>
      <p>Aula useMemo</p>

      <input 
        type="text"
        placeholder="Digite o nome da fruta"
        onChange={(e) => setValueInput(e.target.value)}
      />

      {frutasFiltradas.map((fruta, index) => (
        <p key={index}>{fruta}</p>
      ))}
    </Container>
  );
};
