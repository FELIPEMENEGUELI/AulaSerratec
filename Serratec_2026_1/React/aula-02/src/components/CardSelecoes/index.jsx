import { Card, Header, Escudo, NomePais, Body, Info, Footer, ListaJogadores, Jogador } from "./style";

export function CardSelecoes({ data }) {

  return (
    <>
      {data.map((selecao) => (
        <Card key={selecao.id}>
          <Header cor={selecao.cor}>
            <Escudo>{selecao.escudo}</Escudo>
            <NomePais>{selecao.selecao}</NomePais>
          </Header>

          <Body>
            <Info><strong>Grupo:</strong> {selecao.grupo}</Info>
            <Info><strong>Técnico:</strong> {selecao.tecnico}</Info>
            <ListaJogadores>
              {selecao.jogadores.map((jogador) => (
                <Jogador key={jogador}>{jogador}</Jogador>
              ))}
            </ListaJogadores>
          </Body>

          <Footer>⭐ COPA 2026 ⭐</Footer>
        </Card>
      ))}
    </>
  );
}