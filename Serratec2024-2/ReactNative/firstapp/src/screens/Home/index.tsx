import { Alert, Text, View } from "react-native";
import { styles } from "./style";
import { ButtonComp } from "../../components/ButtonComp";

export const Home = () => {

  const hanldeLogin = () => {
    Alert.alert("Botão para realizar login");
  }

  const handleRegister = () => {
    Alert.alert("Botão cadastrar");
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.estiloTexto}>
        Minha pagina Home
      </Text>

      <View style={styles.boxForms}>
        <ButtonComp handleFunction={hanldeLogin} title="Login" propsBackgroundColor="#5689" />
        <ButtonComp handleFunction={handleRegister} title="Cadastrar" propsBackgroundColor="#5689" />
      </View>

      {/* <Button title="Botão native" color="red" /> */}
    </View>
  )
}