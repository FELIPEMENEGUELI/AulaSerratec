import { useProps } from "../../hooks/useProps"

export const Headers = () => {
  
  const { email } = useProps()
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '50px',
      backgroundColor: '#333',
      color: '#fff',
    }}>
      <button>Home</button>
      <button>About</button>
      <button>Settings</button>
      <button>Carrinho</button>
      <span>Seja bem vindo, {email}</span>
    </div>
  )
}