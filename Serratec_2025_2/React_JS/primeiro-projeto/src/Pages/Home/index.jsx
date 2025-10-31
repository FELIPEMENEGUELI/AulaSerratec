import { ButtonComponent } from "../../Components/Button";
import './style.css'
import { InputGeneric } from '../../Components/Input';

export function Home(){

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>

      Pagina Cadastro

      <InputGeneric
        informacaoParaUsuario="Digite seu email"
        tipoDeInput="email"
      />

      <InputGeneric
        informacaoParaUsuario="Digite seu cpf"
        tipoDeInput="cpf"
      />

      <InputGeneric
        informacaoParaUsuario="Digite seu telefone"
        tipoDeInput="telefone"
      />

      <InputGeneric
        informacaoParaUsuario="Digite seu endereco"
        tipoDeInput="endereco"
      />

      <InputGeneric
        informacaoParaUsuario="Digite sua data de nascimento"
        tipoDeInput="date"
      />

      <ButtonComponent batata="Botao na home" />

    </div>
  )
}
