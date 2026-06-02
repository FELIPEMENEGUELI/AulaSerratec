import { Card } from "./style"

export function CardSelecoes({ data }){

  return (
    <>
      {data.map((selecao) => (
        <Card key={`${selecao.id}`}>
          <span>{selecao.selecao}</span>
          <span>{selecao.escudo}</span>
          <span>{selecao.grupo}</span>
          <span>{selecao.tecnico}</span>
        </Card>
      ))}
    </>
  )
}
