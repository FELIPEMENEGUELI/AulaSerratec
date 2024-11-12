import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";
import { DataAPI } from "../../Mock/Data";
import { styles } from "./style";

export const HomeV4 = () => {

  return (
    <CardApi listaFilmes={DataAPI} />
  )
}

// interface PropsApi {
//   listaFilmes: Array<{
//     name: string;
//     age: number;
//     image: ImageSourcePropType;
//   }>
// }

interface PropsApi {
  id: number;
  name: string;
  age: number;
  image: ImageSourcePropType;
}

interface ArrayPropsApi {
  listaFilmes: PropsApi[]
}

const CardApi = ({ listaFilmes }: ArrayPropsApi) => {

  return (
    <FlatList
      // horizontal={true} Deixa os cards na horizontal
      data={listaFilmes}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) =>
        <View style={styles.container}>
          <View style={styles.boxCard}>
            <View style={styles.boxInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.age}>{item.age}</Text>
            </View>
            <Image style={styles.avatar} source={item.image} alt="Avatar de perfil" />
          </View>
        </View>
      }
    />
  )
}