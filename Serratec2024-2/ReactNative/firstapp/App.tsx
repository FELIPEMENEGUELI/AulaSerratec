import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  // div => View
  // span/h1-h6/p => Text
  // input => TextInput
  // button => TouchableOpacity, Button
  // img => Image, ImageBackground
  // map => FlatList
  
  return (
    <View style={styles.container}>
      <Text style={styles.estiloTexto}>Ola mundo mobile</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },

  estiloTexto: {
    fontSize: 50
  }
});
