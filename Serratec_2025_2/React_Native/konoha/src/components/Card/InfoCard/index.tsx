import { Image, Text, View } from "react-native"
import UserDefault from '../../../../assets/default.png';
import { styles } from "./style"
import { IPropsResponseAPI } from "../../../hooks/type";

export const InfoCard = ({name, debut, id, images}: IPropsResponseAPI) => {

  return (
    <View key={id} style={styles.card}>
      <Image source={images ? {uri: images[0] } : UserDefault} style={styles.image} alt="Banner de login" />
        
      <View>
        <Text style={styles.title}>
          Nome: {name}
        </Text>

        <Text style={styles.subTitle}>
          Estreia: 
          {debut ? debut.anime : ' Informação não disponível'}
        </Text>
      </View>
    </View>
  )
}