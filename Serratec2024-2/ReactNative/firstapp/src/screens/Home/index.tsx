import { FlatList, SectionList, Text, View } from "react-native";
import { styles } from "./style";
import { DataAPI } from "../../Mock/Data";
export const Home = () => {

  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Filme de terror',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Filme de comedia',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Text style={styles.estiloTexto}>
        Home
      </Text> */}

      <FlatList
        horizontal={true}
        data={DataAPI}
        keyExtractor={dados => dados.id.toString()}
        renderItem={({ item }) =>
          <View>
            <Text style={styles.estiloTexto}>{item.name}</Text>
            <Text style={styles.estiloTexto}>{item.age}</Text>
          </View>
        }
      />

      {/* <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => (
          <Text style={styles.estiloTexto}>{section.title}</Text>
        )}

        renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
      /> */}
    </View>
  )
}