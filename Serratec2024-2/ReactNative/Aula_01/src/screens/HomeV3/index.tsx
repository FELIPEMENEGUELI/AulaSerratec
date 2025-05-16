import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";
import { DataAPI } from "../../Mock/Data";
import { styles } from "./style";

export const HomeV3 = () => {

  return (
    <FlatList
      // horizontal={true} Deixa os cards na horizontal
      data={DataAPI}
      keyExtractor={dados => dados.id.toString()}
      renderItem={({ item }) =>
        <View style={styles.container}>
          <CardApi name={item.name} age={item.age} image={item.image} />
        </View>
      }
    />
  )
}

interface PropsCard {
  name: string;
  age: number;
  image: ImageSourcePropType;
}

const CardApi = ({name, age, image}: PropsCard) => {

  return (
    <View style={styles.boxCard}>
      <View style={styles.boxInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>{age}</Text>
      </View>
      <Image style={styles.avatar} source={image} alt="Avatar de perfil" />
    </View>
  )
}