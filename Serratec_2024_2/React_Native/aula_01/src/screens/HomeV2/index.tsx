import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";
import { DataAPI } from "../../Mock/Data";
import { styles } from "./style";
import React from "react";

export const HomeV2 = () => {

  return (
    <FlatList
      // horizontal={true} Deixa os cards na horizontal
      data={DataAPI}
      keyExtractor={dados => dados.id.toString()}
      renderItem={({ item }) =>
        <View style={styles.container}>
          <CardApi data={item} />
        </View>
      }
    />
  )
}

interface PropsApi {
  data: {
    name: string;
    age: number;
    image: ImageSourcePropType;
  }
}

const CardApi = ({data}: PropsApi) => {

  return (
    <View style={styles.boxCard}>
      <View style={styles.boxInfo}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.age}>{data.age}</Text>
      </View>
      <Image style={styles.avatar} source={data.image} alt="Avatar de perfil" />
    </View>
  )
}