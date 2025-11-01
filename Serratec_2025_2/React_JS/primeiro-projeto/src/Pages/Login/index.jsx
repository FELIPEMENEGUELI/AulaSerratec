import { ButtonComponent } from "../../Components/Button";
import { FilhoDaThais } from "../../Components/Input";

function Login(){

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      Pagina Login alterada de novo

      <FilhoDaThais
        informacaoParaUsuario="Digite seu email"
        tipoDeInput="email"
      />

      <FilhoDaThais 
        informacaoParaUsuario="Digite sua senha"
        tipoDeInput="password"
      />

      <ButtonComponent batatas="Logar" />
    </div>
  )
}

export default Login;