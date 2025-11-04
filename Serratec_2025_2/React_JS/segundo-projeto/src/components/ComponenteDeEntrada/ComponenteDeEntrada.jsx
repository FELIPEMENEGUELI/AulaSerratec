import { MeuInputEstilizado, Container, Image } from "./style";
import Default from '../../assets/default.png';

export function ComponenteDeEntrada({propsPlaceHolder}) {

    return (
        <Container>

            <MeuInputEstilizado placeholder={propsPlaceHolder} />

            <Image src={Default} alt="" />
        </Container>
    )
}