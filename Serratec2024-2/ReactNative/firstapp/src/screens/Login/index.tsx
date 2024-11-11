import { Alert, Image, ImageBackground, Text, View } from "react-native";
import { ButtonComp } from "../../components/ButtonComp";
import AvatarImage from '../../assets/html7.jpeg';
import BackgroundImage from '../../assets/serratec2.jpg';
import { styles } from "./style";
import { ButtonTypes } from "../../components/ButtonTypes";

export const Login = () => {

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
    console.log('Pegando informações')
  }

  const handleRegister = () => {
    Alert.alert("Botão cadastrar");
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxForms}>
        <Image style={styles.avatarImage} source={AvatarImage} alt="Avatar de perfil" />

        <Text style={styles.estiloTexto}>
          Login
        </Text>

        {/* 
          <ButtonComp 
            handleFunction={hanldeLogin} 
            title="Login" 
            propsBackgroundColor="#1B75BB" 
          /> 
        */}
        
        {/* 
          <ButtonComp 
            handleFunction={handleRegister} 
            title="Cadastrar" 
            propsBackgroundColor="#1B75BB" 
          /> 
        */}
      
        <ButtonTypes 
          title="Login" 
          handleFunction={handleLogin}
          propsBackgroundColor="#1B75BB"
        />
      </View>

      {/* <Button title="Botão native" color="red" /> */}
    </View>
  )
}