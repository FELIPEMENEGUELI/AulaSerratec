import { useLocation, useNavigate, useParams } from "react-router";
import { useAuth } from "../../hooks/AuthContext";

export const About = () => {

  const location = useLocation();
    const navigate = useNavigate();
  const { email } = useAuth();
  const { aluno } = location.state || '';

  const { id } = useParams();
  console.log('id', id)

  const navegar = () => {
    navigate("/homev1");
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      Bem vinda, {email}!

      <button onClick={navegar}>Ir pra home</button>
    </div>
  )
}
