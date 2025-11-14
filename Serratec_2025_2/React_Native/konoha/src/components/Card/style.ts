import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },

  image: {
    width: 100, 
    height: 100,
    resizeMode: 'contain'
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  subTitle: {
    fontSize: 20
  }
});