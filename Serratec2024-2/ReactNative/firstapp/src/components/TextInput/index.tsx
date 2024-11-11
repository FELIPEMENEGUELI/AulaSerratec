import { Text, TextInput } from "react-native";
import { styles } from './style';

interface PropsInput {
  placeHolder: string;
  typeInput?: boolean;
}

export const TextInputField = ({placeHolder, typeInput}: PropsInput) => {

  return (
    <TextInput 
      style={styles.input}
      placeholder={placeHolder}
      placeholderTextColor="#000"
      secureTextEntry={typeInput}
      // value=""
    />
  )
}