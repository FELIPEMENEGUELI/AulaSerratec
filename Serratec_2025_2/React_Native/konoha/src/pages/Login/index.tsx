import { ActivityIndicator, Alert, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImagemFundo from '../../../assets/banner.webp';
import { batatinha } from './style';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';

export function Login() {
  const navigation = useNavigation();
  const { name, password, setName, setPassword, setIsLoading, isLoading, setData } = useAuth();
  
  const login = async () => {
    setIsLoading(true);

    if(!name || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setData(name, password);
      navigation.navigate("StackHome", { name: "StackHome" });
      setIsLoading(false);
    }, 5000);
  };

  return (
    <View style={batatinha.container}>
      <ImageBackground resizeMode='cover' style={batatinha.imagem} source={ImagemFundo} alt='Imagem de fundo'>
        <View style={batatinha.containerForms}>
          <>
            <TextInput
              keyboardType='email-address' 
              placeholderTextColor={'#fff'} 
              style={batatinha.input} 
              placeholder='Digite seu email'
              value={name}
              onChangeText={setName}
            />

            <TextInput
              secureTextEntry={true} 
              placeholderTextColor={'#fff'} 
              style={batatinha.input} 
              placeholder='Digite sua senha'
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity 
              disabled={isLoading} 
              onPress={login} 
              style={[batatinha.button, { backgroundColor: isLoading ? '#999' : '#fff' }]}
            >
              {isLoading ? (
                <ActivityIndicator size={'small'} color={'#fff'} />
              ) : (
                <Text style={batatinha.titleButon}>Entrar</Text>
              )}
            </TouchableOpacity>
          </>
        </View>
      </ImageBackground>
    </View>
  );
}
