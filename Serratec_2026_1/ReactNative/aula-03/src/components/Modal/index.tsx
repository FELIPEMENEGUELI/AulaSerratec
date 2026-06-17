import React from "react";
import { Button, Modal, Text, View, StyleSheet } from "react-native";

interface PropsModal {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export const ModalComponent = ({ openModal, setOpenModal }: PropsModal ) => {
  return (
    <Modal visible={openModal} transparent={true} animationType="slide" style={styles.container}> 
      <View style={styles.overlay}>

        <View style={styles.modalContainer}>
          <Text>Modal aberto</Text>

          <Button title="Fechar" onPress={() => setOpenModal(false)} />
        </View>

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
});
