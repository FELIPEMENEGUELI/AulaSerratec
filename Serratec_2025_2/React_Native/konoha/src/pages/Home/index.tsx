import { ImageBackground, View, Text, Alert } from "react-native";
import Banner from '../../../assets/banner.webp';
import { Card } from "../../components/Card";
import { styles } from "./style";
import { ButtonComponent } from "../../components/Button";
import { Api } from "../../services/Api";
import { useEffect } from "react";

export const Home = () => {

  const listaAlunos = [
    {
      id: 1,
      nome: 'João',
      time: 'Vascaino'
    },
    {
      id: 2,
      nome: 'Jessica',
      time: 'Botafoguense'
    },
    {
      id: 3,
      nome: 'Hugo',
      time: 'Fluminense'
    },
    {
      id: 4,
      nome: 'Hyago',
      time: 'Flamenguista e feliz'
    },
    {
      id: 5,
      nome: 'Simone',
      time: 'Fluminense'
    },
    {
      id: 6,
      nome: 'Lorrane',
      time: 'Flamenguista'
    },
    {
      id: 7,
      nome: 'Thais',
      time: 'Guanabara'
    },
    {
      id: 8,
      nome: 'Miguel',
      time: 'Flamenguista'
    },
    {
      id: 9,
      nome: 'Rafael',
      time: 'Sao Pedro FC'
    },
    {
      id: 10,
      nome: 'Miguel da Simone',
      time: 'Fluminense'
    },
    {
      id: 11,
      nome: 'Ireni',
      time: 'Palmeiras nao tem mundial'
    },
    {
      id: 12,
      nome: 'Giselle',
      time: 'Fluminense'
    },
    {
      id: 13,
      nome: 'Cayan',
      time: 'Vasco'
    },
    {
      id: 14,
      nome: 'Samuel',
      time: 'Santista'
    },
  ];

  const loadApiNaruto = async () => {
    try {

      const response = await Api.get('/akatsuki');
      console.log('Verificando resposta', response.data.akatsuki);

    } catch (error) {
      Alert.alert('Erro ao carregar dados da API');
    }
  }

  useEffect(() => {
    loadApiNaruto();
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground source={Banner} style={styles.background}>

        {listaAlunos.length <= 0 ? (
          <View style={{ backgroundColor: 'red', marginBottom: 20 }}>
            <Text style={{ fontSize: 50}}>Não existe alunos nessa turma!</Text>
          </View>
        ) : (
          <>
            <Card listaAlunos={listaAlunos} />
          </>
        )}

        <ButtonComponent
          title="Entrar" 
          age={10}
          backgroundColor="green"
          onChange={() => null}
        />

      </ImageBackground>
    </View>
  )
}