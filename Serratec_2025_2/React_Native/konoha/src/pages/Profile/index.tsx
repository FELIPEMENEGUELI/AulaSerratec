import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useNavigation } from "@react-navigation/native";

export const Profile = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Profile
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("StackSettings")} style={styles.button}>
        <Text style={styles.title}>Navegar para configurações</Text>
      </TouchableOpacity>
    </View>
  )
}