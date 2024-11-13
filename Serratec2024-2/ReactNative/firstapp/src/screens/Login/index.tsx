import { useState } from "react";
import { Alert, Image, ImageBackground, Keyboard, TouchableWithoutFeedback, View } from "react-native";
import BackgroundImage from '../../assets/backgroundimg.jpg';
import ImageSerratec from '../../assets/serratec2.jpg';
import { ButtonTypes } from "../../components/ButtonTypes";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";

export const Login = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
    console.log('Pegando informações', email, password);
  }

  const handlePassword = (value: string) => {
    setPassword(value);
  }

  const handleEmail = (value: string) => {
    setEmail(value);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage} 
          resizeMode="cover" 
          source={BackgroundImage}
        >
          <View style={styles.boxForms}>

            {/* <Text style={styles.estiloTexto}>
              Login Serratec
            </Text> */}

            <Image style={styles.avatarImage} source={ImageSerratec} alt="Avatar de perfil" />

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

            <View style={{ marginTop: 50 }} />

            <TextInputField
              placeHolder="Digite seu email"
              valueInput={email}
              hadleFunctionInput={handleEmail}
              typeIcon="person"
            />

            <TextInputField
              placeHolder="Digite sua senha"
              valueInput={password}
              hadleFunctionInput={handlePassword}
              typeInput={true}
              typeIcon="password"
            />

            <ButtonTypes 
              title="Login" 
              handleFunction={handleLogin}
              propsBackgroundColor="#1B75BB"
            />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}