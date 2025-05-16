

export const ButtonComponents = ({nome, funcao}) => {

  return (
    <button onClick={funcao}>
      {nome}
    </button>
  )
}