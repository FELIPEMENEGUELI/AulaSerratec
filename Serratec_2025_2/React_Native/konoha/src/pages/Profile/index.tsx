import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";

export const Profile = () => {

  const navigation = useNavigation();
  const { nome } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Profile {nome}
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("StackSettings")} style={styles.button}>
        <Text style={styles.title}>Navegar para configurações</Text>
      </TouchableOpacity>
    </View>
  )
}