import { StyleSheet } from "react-native";

export const batatinha = StyleSheet.create({
  container: {
    flex: 1,
  },

  titulo: {
    fontSize: 30,
    color: 'red'
  },

  subTitulo: {
    fontSize: 25,
    color: 'green',
  },

  containerForms: {
    backgroundColor: '#4e4646',
    width: '80%',
    height: '30%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    borderRadius: 8
  },

  input: {
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 20,
    borderRadius: 8,
  },

  button: {
    width: '100%',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center'
  },

  titleButon: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center'
  },

  imagem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});