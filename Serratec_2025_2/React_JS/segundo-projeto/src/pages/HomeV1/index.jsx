import React, { useEffect, useState } from 'react'
import { Api } from '../../services/Api'
import ImageDefault from '../../assets/default.png'
import { CardContainer, Image, Name } from './style'

export const HomeV1 = () => {

  const [bestasNaruto, setBestasNaruto] = useState([]);
  
  const carregarDadosApi = async () => {

    try {
      const resposta = await Api.get('/akatsuki');
      const dados = await resposta.data.akatsuki;

      if(resposta.status === 200) {
        console.log("Respostas da API", dados)
        setBestasNaruto(dados);
        
      } else {
        setBestasNaruto([]);
        console.log("Alguma informacao no campo de cadastro esta imcompleta")
      }
      
    } catch (error) {
      console.log("Nosso servidor esta fora do ar, tente mais tarde")
    }
  }

  useEffect(() => {
    carregarDadosApi();
  }, [])

  return (
    <div>
      Bem vindo a pagina do Naruto

      {bestasNaruto.map((bestaNaruto) => (
        <CardContainer key={bestaNaruto.id}>
          <Image src={bestaNaruto.images ? bestaNaruto.images[0] : ImageDefault} alt="Imagem da besta do anime do Naruto" />
          <Name>Nome: {bestaNaruto.name}</Name>
        </CardContainer>
      ))}
    </div>
  )
}