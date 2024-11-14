import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export const Profile = () => {

  const navigation = useNavigation();

  const navigateToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxCard}>
        <Text style={styles.name}>Tela Profile</Text>
        <TouchableOpacity onPress={navigateToSettings}>
          <Text style={styles.textNavigate}>Navegar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}