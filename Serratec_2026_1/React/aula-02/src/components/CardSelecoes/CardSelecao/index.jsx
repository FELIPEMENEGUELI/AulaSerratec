
// {selecao Argentina}

import { useState } from "react";
import { 
  Card, 
  Header, 
  Escudo, 
  NomePais, 
  Body, 
  Info, 
  Footer, 
  ListaJogadores, 
  Jogador,
  BotaoCard
} from "./style";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineStar, HiStar } from "react-icons/hi";

export function CardSelecao({ recebendoCadaSelecaoIndividualmente }) {
  const [favorito, setFavorito] = useState(false);
  
  return (
    <>      
      <Card key={recebendoCadaSelecaoIndividualmente.id}>

        <Header cor={recebendoCadaSelecaoIndividualmente.cor}>
          <Escudo>{recebendoCadaSelecaoIndividualmente.escudo}</Escudo>
          <NomePais>{recebendoCadaSelecaoIndividualmente.selecao}</NomePais>
        </Header>

        <BotaoCard onClick={() => setFavorito(!favorito)}>
          {favorito ? 'Desfavoritar' : 'Favoritar'}
          {favorito ? <HiOutlineStar color={'red'} size={20} /> : <HiStar color={'red'} size={20} />}
        </BotaoCard>

        {/* <FaApple color={recebendoCadaSelecaoIndividualmente.cor} size={30} />
        <FcGoogle size={30} /> */}

        <Body>
          <Info><strong>Grupo:</strong> {recebendoCadaSelecaoIndividualmente.grupo}</Info>
          <Info><strong>Técnico:</strong> {recebendoCadaSelecaoIndividualmente.tecnico}</Info>

          <ListaJogadores>
            {recebendoCadaSelecaoIndividualmente.jogadores.map((jogador) => (
              <Jogador key={jogador}>{jogador}</Jogador>
            ))}
          </ListaJogadores>
        </Body>

        <Footer>⭐ COPA 2026 ⭐</Footer>
      </Card>
    </>
  );
}