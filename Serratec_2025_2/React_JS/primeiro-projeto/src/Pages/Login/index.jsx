import { ButtonComponent } from "../../Components/Button";
import { InputGeneric } from "../../Components/Input";

function Login(){

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      Pagina Login alterada de novo

      <InputGeneric
        informacaoParaUsuario="Digite seu email"
        tipoDeInput="email"
      />

      <InputGeneric 
        informacaoParaUsuario="Digite sua senha"
        tipoDeInput="password"
      />

      <ButtonComponent batatas="Logar" />
    </div>
  )
}

export default Login;