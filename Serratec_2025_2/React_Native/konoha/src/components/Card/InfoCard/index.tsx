import { Image, Text, View } from "react-native"
import UserDefault from '../../../../assets/default.png';
import { styles } from "./style"
import { IPropsResponseAPI } from "../../../hooks/type";
import { useTheme } from "../../../hooks/useTheme";

export const InfoCard = ({name, debut, id, images}: IPropsResponseAPI) => {

  const {colors} = useTheme();

  return (
    <View key={id} style={[styles.card, { backgroundColor: colors.background }]}>
      <Image source={images ? {uri: images[0] } : UserDefault} style={styles.image} alt="Banner de login" />
        
      <View>
        <Text style={[styles.title, { color: colors.text }]}>
          Nome: {name}
        </Text>

        <Text style={[styles.subTitle, { color: colors.text }]}>
          Estreia: 
          {debut ? debut.anime : ' Informação não disponível'}
        </Text>
      </View>
    </View>
  )
}