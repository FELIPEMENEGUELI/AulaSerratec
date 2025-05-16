import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";

export const Settings = () => {

  const { handleLogOut } = useAuth();

  const navigateToLogin = () => {
    handleLogOut();
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