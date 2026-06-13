import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageBackground from './assets/pngtree-stunning-4k-image-showcasing-the-beauty-of-nature-image_15718240.jpg';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>
    //     Ola mundo
    //   </Text>

    //    <TouchableOpacity style={styles.button} activeOpacity={1}>
    //       <Text style={styles.textButton}>
    //         Entrar
    //       </Text>
    //    </TouchableOpacity>

    //    <Button title='Logar' />

    //    <Image source={ImageBackground} alt='Imagem que identifica uma lagoa azul com flores e cachoeira no fundo.' />

    //   <StatusBar style="auto" />
    // </View>

    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: 'white'
  },

  button: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    color: '#000',
    fontSize: 25
  }
});