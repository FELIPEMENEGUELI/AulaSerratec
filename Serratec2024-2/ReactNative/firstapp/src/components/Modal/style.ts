import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  cardModal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    width: 350,
    height: 300,
    borderRadius: 10,
    position: 'relative',
  },

  messageModal: {
    fontSize: 25,
    textAlign: 'center',
  },

  buttonClose: {
    position: 'absolute',
    right: 5,
    top: -30,
  },

  textClose: {
    fontSize: 20
  }
});