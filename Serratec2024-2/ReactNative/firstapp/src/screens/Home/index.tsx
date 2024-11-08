import { Text, View } from "react-native";
import { styles } from "./style";
import { ButtonComp } from "../../components/ButtonComp";

export const Home = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.estiloTexto}>
        Minha pagina Home
      </Text>

      <View style={styles.boxForms}>
        <ButtonComp title="Pesquisar" propsBackgroundColor="#5689" />
      </View>

      {/* <Button title="Botão native" color="red" /> */}
    </View>
  )
}