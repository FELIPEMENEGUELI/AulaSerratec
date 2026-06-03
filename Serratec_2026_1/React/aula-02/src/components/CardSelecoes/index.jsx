import { CardSelecao } from "./CardSelecao";

// const selecoes = [
//   {selecao Brasil},
//   {selecao Argentina}
// ]

export function CardSelecoes({ listaSelecoesChegando }){

  return (
    <>
      {listaSelecoesChegando.map(salvandoCadaSelecao => (
        <CardSelecao key={salvandoCadaSelecao.id} recebendoCadaSelecaoIndividualmente={salvandoCadaSelecao} />
      ))}
    </>
  )
};
