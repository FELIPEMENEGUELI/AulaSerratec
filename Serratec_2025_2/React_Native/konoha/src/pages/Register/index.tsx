import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useNavigation } from "@react-navigation/native";

export const Contacts = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contacts
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("TabHome")} style={styles.button}>
        <Text style={styles.title}>Navegar para home</Text>
      </TouchableOpacity>
    </View>
  )
}