import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/useAuth';

export const Login = () => {

  const navigation = useNavigate();
  const { name, setName, password, setPassword, validateUser } = useAuth();

  function logar() {
    navigation('/home');
  }

  return (
    <div>
      <h1>Login</h1>

      <button onClick={logar}>
        Entrar
      </button>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
  )
}
