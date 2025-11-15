import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"

export const Settings = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Settings
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.title}>Navegar</Text>
      </TouchableOpacity>
    </View>
  )
}