import { InputStyle } from "./style"

export const InputField = ({propsplaceholder, propstype, handleFunction}) => {

  return (
    <InputStyle
      placeholder={propsplaceholder}
      type={propstype}
      onChange={handleFunction}
     />
  )
}
