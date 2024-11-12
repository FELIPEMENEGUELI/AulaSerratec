import { Text, TextInput } from "react-native";
import { styles } from './style';

interface PropsInput {
  placeHolder: string;
  typeInput?: boolean;
  valueInput: string;
  hadleFunctionInput: (value: string) => void;
}

export const TextInputField = ({ 
  placeHolder, 
  typeInput, 
  valueInput,
  hadleFunctionInput
}: PropsInput) => {

  return (
    <TextInput
      onChangeText={hadleFunctionInput}
      style={styles.input}
      placeholder={placeHolder}
      placeholderTextColor="#000"
      secureTextEntry={typeInput}
      value={valueInput}
    />
  )
}