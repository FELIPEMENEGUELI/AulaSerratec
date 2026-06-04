import { useNavigate } from 'react-router';

export const Login = () => {

  const navigation = useNavigate();
  
  function logar() {
    navigation('/', { state: { nome: 'Marcelo' }});
  }

  return (
    <div>
      <h1>Login</h1>

      <button onClick={logar}>
        Entrar
      </button>
    </div>
  )
}
