import { ButtonComponents } from "../ButtonComponents"

export const ContainerText = ({children, nome}) => {

  return (
    <div>
      {/* <ButtonComponents nome="Botao no ContainerText"/> */}

      Titulo do modal {nome}

      {children}
    </div>
  )
}