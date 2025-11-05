import { Link, NavLink, useNavigate } from "react-router"

export const LoginSegundo = () => {

  const navigate = useNavigate();

  const navegar = () => {
    navigate("/home")
  }

  return (
    <div>
        <h1>Tela de login</h1>

        <button onClick={() => navigate("/home")}>Ir para pagina inicial</button>
        
    </div>
  )
}