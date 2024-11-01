import { useEffect, useState } from 'react';
import { Container } from './style';
import axios from 'axios';
import { FaRegHeart, FaMap } from "react-icons/fa";

export const RequestApi = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  }

  // const carregar = async () => {};

  async function carregarDadosApi(){

    const url = 'https://66f4ad8277b5e889709a277e.mockapi.io/api/v1/users';

    try {
      const resposta = await axios.get(url);

      if(resposta.status === 200) {
        console.log('Informações da api', resposta.data)
      } else {
        console.log('Erro ao buscar informações da api')
      }
    } 
    catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  useEffect(() => {
    carregarDadosApi();
  }, [])

  return (
    <Container>
        RequestApi <FaRegHeart /> <FaMap />
    </Container>
  )
}