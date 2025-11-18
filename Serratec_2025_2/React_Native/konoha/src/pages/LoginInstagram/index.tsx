import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons';
import { styles } from './style';

export const LoginInstagram = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.titleInsta}>Instagram</Text>

        <View style={styles.containerForms}>
          <TextInput
            placeholder='Telefone, nome de usuario ou email'
            style={styles.input}
          />

          <View style={styles.containerInput}>
            <TextInput 
              placeholder='Senha'
              secureTextEntry={true}
              style={[styles.input, { width: '100%' }]}
            />

            <Icon style={styles.icon} name="eye-off" size={24} color="#a7a7a7a" />
          </View>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.textForgot}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.login}>
            <Text style={styles.textLogin}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.containerLine}>
            <View style={styles.line} />

            <Text style={styles.textOr}>ou</Text>

            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.loginFacebook}>
            <Icon name="logo-facebook" size={24} color="#0098FD" />
            <Text style={styles.textForgot}>Logar com Facebook</Text>
          </TouchableOpacity> 
        </View>
      </View>

      <View style={styles.containerBottom}>
        <View style={styles.containerCreateAccount}>
          <Text style={styles.texCreateAccount}>Ainda não tem conta?</Text>
          <TouchableOpacity >
            <Text style={styles.textForgot}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}
