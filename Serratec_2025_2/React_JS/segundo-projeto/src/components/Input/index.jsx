export const Input = ({typeComponent, placeholder, value, funcaoVindaPorProps}) => {

  return (
    <input 
      type={typeComponent}
      id={typeComponent}
      placeholder={placeholder}
      required
      value={value}
      onChange={funcaoVindaPorProps}
    />
  )
}
