import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";

export const Contacts = () => {

  const navigation = useNavigation();
  const { nome, removeData } = useAuth();

  const logout = () => {
    removeData();
    navigation.navigate("StackLogin");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contacts {nome}
      </Text>

      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.title}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}