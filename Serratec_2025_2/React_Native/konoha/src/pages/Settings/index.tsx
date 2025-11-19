import { Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";
import { StackList } from "../../@types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "./style"

type IPropsRoute = StackScreenProps<StackList, 'StackSettings'>;

export const Settings = ({route}: IPropsRoute) => {

  const nameRoute = route.params.nomeAula;
  const { name } = useAuth();

  if(!name) return;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {!name ? 'Usuário não logado' : `Bem vindo, ${name}`}
      </Text>

      <Text style={styles.title}>
        Aula de {nameRoute}
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
