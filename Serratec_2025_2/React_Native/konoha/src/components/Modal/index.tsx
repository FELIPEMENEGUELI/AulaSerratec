import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { IPropsResponseAPI } from "../../hooks/type";
import UserDefault from '../../../assets/default.png';
import { styles } from "./style";

interface PropsModal {
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
  itemSelected: IPropsResponseAPI | null;
}

export const ModalComponent = ({isOpenModal, setIsOpenModal, itemSelected}: PropsModal) => {

  const { colors } = useTheme();

  return (
    <Modal visible={isOpenModal} animationType="slide">

      <View style={[styles.container, { backgroundColor: colors.background }]}>

        <Image source={itemSelected?.images ? {uri: itemSelected.images[0] } : UserDefault} style={styles.image} alt="Banner de login" />
                
        <View>
          <Text style={[styles.title, { color: colors.text }]}>
            Nome: {itemSelected?.name}
          </Text>
  
          <Text style={[styles.subTitle, { color: colors.text }]}>
            Estreia: 
            {itemSelected?.debut ? itemSelected.debut.anime : ' Informação não disponível'}
          </Text>
        </View>

        <TouchableOpacity onPress={() => setIsOpenModal(false)}>
          <Text style={[styles.text, { color: colors.text }]}>
            Fechar
          </Text>
        </TouchableOpacity>
      </View>

    </Modal>
  )
}
