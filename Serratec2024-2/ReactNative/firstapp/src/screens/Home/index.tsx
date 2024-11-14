import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {

  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxCard}>
        <Text style={styles.name}>Tela Home</Text>
        <TouchableOpacity onPress={navigateToProfile}>
          <Text style={styles.textNavigate}>Navegar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}