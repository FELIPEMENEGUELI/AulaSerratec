import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
    width: 80, 
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    width: '100%'
  },

  title: {
    fontSize: width < 767 ? 20 : 40,
  },

  subTitle: {
    fontSize: width < 767 ? 16 : 35
  }
});