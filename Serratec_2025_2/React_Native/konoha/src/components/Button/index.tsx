import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { IPropsButton } from "./type";

export const ButtonComponent = ({title, age, backgroundColor, onChange}: IPropsButton) => {

  return (
    <TouchableOpacity onPress={onChange}
      style={[styles.button, 
        {
          backgroundColor: backgroundColor ? backgroundColor : 'orange',
        }
      ]}>

      <Text style={styles.title}>
        {title}
      </Text>

      {age && (
        <Text style={styles.title}>
          {age}
        </Text>
      )}
    </TouchableOpacity>
  )
}
