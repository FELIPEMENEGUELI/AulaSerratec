import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },

  boxCard: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: "#1B75BB"
  },

  boxInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  
  age: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  avatar: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },

});