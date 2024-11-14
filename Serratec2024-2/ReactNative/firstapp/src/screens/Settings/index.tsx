import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export const Settings = () => {

  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("StackLogin", { name: "Login" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxCard}>
        <Text style={styles.name}>Tela Settings</Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.textNavigate}>Navegar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}