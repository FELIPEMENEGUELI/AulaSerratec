import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type PropsButton = {
  title: string | number;
  propsBackgroundColor?: string;
  handleFunction: () => void;
}

interface Props1 {
  title: string;
  title2: string;
}

interface Props2 {
  subTitle: string;
}

// Conceito: intersection ou extends
type PropsAll = Props2 & Props1;
interface PropsAll2 extends Props1, Props2 {}

// Conceito Pick: pegar uma informação de uma interface
type PropsPick = Pick<Props1, 'title'>

// Conceito Omit: retirar uma informação de uma interface
type PropsOmit = Omit<Props1, 'title2'>

// Record: definindo todas as propriedades de uma só vez
type PropsRecord = Record<'name' | 'cidade' | 'bairro', string>

// K => key
// V => value

function tiposGenericos<T>(args: T){
  return args;
}

export const ButtonTypes = ({title, propsBackgroundColor, handleFunction}: PropsButton) => {

  // const example = tiposGenericos({name: "Elyn", bairro: "Cascatinha"})

  return (
    <TouchableOpacity
      onPress={handleFunction}
      activeOpacity={0.2}
      style={[styles.styleButton, 
        {
          backgroundColor: propsBackgroundColor ? propsBackgroundColor : "#000"
        }
      ]}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
