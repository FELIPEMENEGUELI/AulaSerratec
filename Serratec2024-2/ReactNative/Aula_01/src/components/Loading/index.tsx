import { ActivityIndicator, Text, View } from "react-native"
import { styles } from "./style"

export const Loading = () => {

  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color="#1B75BB" />
    </View>
  )
}