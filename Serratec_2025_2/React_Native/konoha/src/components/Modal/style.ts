import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: width < 767 ? 20 : 40
  },

  image: {
    width: 80, 
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },

  title: {
    fontSize: width < 767 ? 20 : 40,
  },

  subTitle: {
    fontSize: width < 767 ? 16 : 35
  }
});