import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import Icon from '@expo/vector-icons/Ionicons';
import { PropsCardTask } from './type';
import ImageBackground from '../../../assets/pngtree-stunning-4k-image-showcasing-the-beauty-of-nature-image_15718240.jpg';
import { styles } from "./style";

export const CardTask = ({ title, description, tecnologias, imagem }: PropsCardTask) => {

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.cardTask}>
      {imagem && (
        <Image style={styles.image} source={ImageBackground} alt='Imagem que identifica uma lagoa azul com flores e cachoeira no fundo.' />
      )}

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Text style={styles.textDefault}>
        {tecnologias}
      </Text>

      <TouchableOpacity style={styles.buttonAction}>
        <Text style={styles.textButton}>Inscreva-se</Text>

        <Icon 
          name="arrow-forward" 
          size={width < 767 ? 20 : 40} 
          color="white" 
        />
      </TouchableOpacity>
    </View> 
  )
}
