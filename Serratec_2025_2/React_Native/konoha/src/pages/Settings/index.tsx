import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";

export const Settings = () => {

  const { name } = useAuth();

  if(!name) return;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {!name ? 'Usuário não logado' : `Bem vindo, ${name}`}
      </Text>

      <Text style={styles.title}>
        Settings
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("TabProfile")} style={styles.button}>
        <Text style={styles.title}>Navegar para Profile</Text>
      </TouchableOpacity>
    </View>
  )
}
