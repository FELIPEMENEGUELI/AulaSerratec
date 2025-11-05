import { useNavigate } from "react-router"

export const LoginSegundo = () => {

  const navigate = useNavigate();

  const navegar = () => {
    navigate("/about", { state: { aluno: 'Hyago Flamenguista' }});
  }

  return (
    <div>
        <h1>Tela de login</h1>

        <button onClick={navegar}>Ir para pagina inicial</button>
        
    </div>
  )
}