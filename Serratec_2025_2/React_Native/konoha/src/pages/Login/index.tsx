import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImagemFundo from '../../../assets/banner.webp';
import { batatinha } from './style';
import { useNavigation } from '@react-navigation/native';

export function Login() {
  const navigation = useNavigation();

  const login = async () => {
    navigation.navigate("StackHome", { name: "StackHome" });
  }

  return (
    <View style={batatinha.container}>
      <ImageBackground resizeMode='cover' style={batatinha.imagem} source={ImagemFundo} alt='Imagem de fundo'>
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
