import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImagemFundo from '../../../assets/banner.webp';
import { batatinha } from './style';
import { useNavigation } from '@react-navigation/native';

export function Login() {

  const navigation = useNavigation();

  const login = () => {
    navigation.navigate("StackHome");
  }

  return (
    <View style={batatinha.container}>
      {/* <Text style={{ fontSize: 50 }}>
        Hello React Native!
      </Text> */}
      <StatusBar style="auto" />


      {/* <div></div>  ===== <View></View> */}
      {/* h1 ... h6, span, p... ====> <Text></Text> */}

      {/* <img/> ===== <Image /> */}

      {/* <button> clicar </button> */}

      {/* <TouchableOpacity style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 100 }}>
          Clicar 
        </Text>
      </TouchableOpacity> */}
      
      {/* <Button title='Clicar' /> */}

      {/* <Text style={batatinha.titulo}>
        Titulo
      </Text>

      <Text style={batatinha.subTitulo}>
        Sub titulo
      </Text> */}

      <ImageBackground resizeMode='cover' style={batatinha.imagem} source={ImagemFundo} alt=''>
        <View style={batatinha.containerForms}>

          <TextInput keyboardType='email-address' placeholderTextColor={'#fff'} style={batatinha.input} placeholder='Digite seu email' />
          <TextInput secureTextEntry={true} placeholderTextColor={'#fff'} style={batatinha.input} placeholder='Digite sua senha' />

          <TouchableOpacity onPress={login} style={batatinha.button}>
            <Text style={batatinha.titleButon}>Entrar</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}
