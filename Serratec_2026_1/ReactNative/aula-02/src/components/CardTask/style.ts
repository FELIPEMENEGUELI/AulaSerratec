import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  cardTask: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    paddingVertical: width < 767 ? 10 : 20,
    paddingHorizontal: 15,
    gap: 8,
    backgroundColor: 'white',
  },

  image: {
    height: 80,
    width: 100
  },

  title: {
    fontSize: width < 767 ? 26 : 40,
    fontWeight: 'bold'
  },

  description: {
    fontSize: width < 767 ? 20 : 32,
  },

  textDefault: {
    fontSize: width < 767 ? 16 : 28,
  },

  buttonAction: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#f00',
    margin: 10,
    borderRadius: 4,
    width: width < 767 ? 150 : 270,
    paddingVertical: 4,
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 48
  },

   textButton: {
    fontSize: width < 767 ? 18 : 35,
    fontWeight: '700',
    color: 'white'
  },
});