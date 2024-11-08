import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface PropsButton {
  title?: string;
  propsBackgroundColor?: string;
}

export const ButtonComp = ({ title, propsBackgroundColor }: PropsButton) => {

  return (
    <TouchableOpacity
      activeOpacity={0.2}
      style={[styles.styleButton, {
        backgroundColor: propsBackgroundColor ? propsBackgroundColor : "red"
      }]}
    >
      <Text style={styles.text}>{title ? title : "Entrar"}</Text>
    </TouchableOpacity>
  )
}