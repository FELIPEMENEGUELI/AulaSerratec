import { ButtonStyle } from "./style"

export const Button = ({title, handleFunction}) => {
  
  return (
    <ButtonStyle onClick={handleFunction}>
      {title}
    </ButtonStyle>
  )
}