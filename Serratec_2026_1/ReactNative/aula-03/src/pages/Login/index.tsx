import { TextInput, View, TouchableOpacity, Text } from "react-native"
import { useAuth } from "../../contexts/useAuth";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {

 const { nome, setNome, saveData, removeData } = useAuth();
 const navigate = useNavigation();

 function logar() {
  // navigate.navigate('StackHome');
  saveData(nome);
 }
 
  return (

    <View>

      <TextInput
        value={nome} 
        onChangeText={(value) => setNome(value)}
        placeholder="Digite seu nome..."
        style={{
          backgroundColor: '#ddd',
          color: '#000',
          width: 250,
          height: 60,
          fontSize: 30
        }} 
      />

      <TouchableOpacity
        onPress={logar}
        style={{
          backgroundColor: '#000',
          width: '100%',
          height: 60
        }}>
        <Text style={{ color: '#fff', fontSize: 30 }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  )
}