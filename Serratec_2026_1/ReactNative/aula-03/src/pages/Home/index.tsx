import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { useAuth } from '../../contexts/useAuth'
import { ModalComponent } from '../../components/Modal';

export const Home = () => {

  const { nome } = useAuth();
  const [openModal, setOpenModal] = useState<boolean>(false);

  function alerta() {
    Alert.alert('Exibicao do alerta', 'Descricao do alerta', [
      {
        text: 'Cancelar',
        onPress: () => setOpenModal(false),
        style: 'cancel'
      },
      {
        text: 'Ir para loja',
        onPress: () => setOpenModal(false),
        style: 'cancel'
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text>
        Home
      </Text>

      <Text>
        Seja bem vindo, {nome}
      </Text>

      <Button title='Abrir modal' onPress={alerta} />
      {/* <Button title='Abrir modal' onPress={() => setOpenModal(true)} /> */}

      {openModal && (
        <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

