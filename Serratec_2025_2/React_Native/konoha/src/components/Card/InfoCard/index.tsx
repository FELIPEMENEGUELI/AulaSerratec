import { Image, Text, View } from "react-native"
import UserDefault from '../../../../assets/default.png';
import { PropsInfoCard } from "../type";
import { styles } from "./style"

export const InfoCard = ({nome, time}: PropsInfoCard) => {

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>
          Nome: {nome}
        </Text>

        <Text style={styles.subTitle}>
          Time: {time}
        </Text>
      </View>

      <Image source={UserDefault} style={styles.image} alt="Banner de login" />
    </View>
  )
}