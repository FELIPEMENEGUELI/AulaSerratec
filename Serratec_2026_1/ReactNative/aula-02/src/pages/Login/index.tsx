import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputField } from '../../components/InputField';
import { ButtonComponent } from '../../components/Button';

export const Login = () => {

  const navegando = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>

      <InputField />

      <ButtonComponent onChange={() => navegando.navigate('StackHomeV2')}/>
    
    </View>
  )
}
