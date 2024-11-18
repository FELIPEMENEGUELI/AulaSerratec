import React, { useState } from "react";
import { Image, ImageBackground, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import BackgroundImage from '../../assets/backgroundimg.jpg';
import ImageSerratec from '../../assets/serratec2.jpg';
import { ButtonTypes } from "../../components/ButtonTypes";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";
import { useAuth } from "../../hooks/useAuth";
import { Loading } from "../../components/Loading";

export const Login = () => {

  const { email, setEmail, checkAuthentication, isLoading } = useAuth();
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    checkAuthentication(email);
  }

  const handlePassword = (value: string) => {
    setPassword(value);
  }

  const handleEmail = (value: string) => {
    setEmail(value);
  }

  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <ImageBackground
              style={styles.backgroundImage}
              resizeMode="cover"
              source={BackgroundImage}
            >
              <View style={styles.boxForms}>
                <Image style={styles.avatarImage} source={ImageSerratec} alt="Avatar de perfil" />
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
      )}
    </React.Fragment>
  )
}