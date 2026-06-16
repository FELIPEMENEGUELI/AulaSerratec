import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import { PropsCardTask, PropsCardTaskV2 } from './type';
import { styles } from "./style";

// export const CardTask = ({ data }: PropsCardTaskV2) => {
export const CardTask = ({ title, description, tecnologias, onChangeRemove, id }: PropsCardTask) => {

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.cardTask}>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Text style={styles.textDefault}>
        {tecnologias}
      </Text>

      <TouchableOpacity style={styles.buttonAction} onPress={() => onChangeRemove(id)}>
        <Text style={styles.textButton}>Remover curso</Text>
      </TouchableOpacity>
    </View> 
  )
}
