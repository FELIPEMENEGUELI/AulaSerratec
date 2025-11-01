import { ButtonComponent } from "../../Components/Button";
import './style.css'
import { FilhoDaThais } from '../../Components/Input';

export function MaeThais(){

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>

      Pagina Cadastro

      <FilhoDaThais
        informacaoParaUsuario="Digite seu email"
        tipoDeInput="email"
      />

      <FilhoDaThais
        informacaoParaUsuario="Digite seu cpf"
        tipoDeInput="cpf"
      />

      <FilhoDaThais
        informacaoParaUsuario="Digite seu telefone"
        tipoDeInput="telefone"
      />

      <FilhoDaThais
        informacaoParaUsuario="Digite seu endereco"
        tipoDeInput="endereco"
      />

      <FilhoDaThais
        informacaoParaUsuario="Digite sua data de nascimento"
        tipoDeInput="date"
      />

      <ButtonComponent batata="Botao na home" />

    </div>
  )
}
