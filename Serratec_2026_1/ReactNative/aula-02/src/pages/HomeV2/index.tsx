import { FlatList, Image, Text, View } from 'react-native';
import { styles } from './style';
import TheRain from '../../assets/3683675.jpg'
import PanteraCorDeRosa from '../../assets/images.jpeg'

const filmesLancamentos = [
  {
    id: 1,
    image: TheRain,
    identificacao: 'Filme the Rain'  
  },
  {
    id: 2,
    image: PanteraCorDeRosa,
    identificacao: 'Filme da pantera cor de rosa'    
  },
];

const filmesEmAlta = [];

export const HomeV2 = () => {

  return (
    <View style={styles.container}>
      <Text>Pagina Home</Text>

      <FlatList
        horizontal={true}
        data={filmesLancamentos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View>
              <Image source={item.image} alt={item.identificacao} />  
          </View>
        )}
        
      />
    </View> 
  )
}