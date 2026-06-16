import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"

interface PropsButton {
  onChange: () => void;
};

export const ButtonComponent = ({ onChange }: PropsButton) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onChange}>
      <Text style={styles.textColor}>
        Sing In
      </Text>
    </TouchableOpacity>
  )
}