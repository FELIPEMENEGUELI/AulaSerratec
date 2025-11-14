import { FlatList, Image, Text, View } from "react-native"
import UserDefault from '../../../assets/default.png';
import { styles } from "./style"

export const Card = () => {

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

  return (
    <>
      <FlatList
        data={listaAlunos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => 
          <View style={styles.card}>
            <View>
              <Text style={styles.title}>
                Nome: {item.nome}
              </Text>

              <Text style={styles.subTitle}>
                Time: {item.time}
              </Text>
            </View>

            <Image source={UserDefault} style={styles.image} alt="Banner de login" />
          </View>
        }
      />
    </>
  )
}