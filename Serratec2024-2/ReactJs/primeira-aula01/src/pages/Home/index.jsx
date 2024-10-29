import { ButtonComponents } from "../../components/ButtonComponents";
import { ContainerText } from "../../components/ContainerText";
import {About} from '../About'
import './style.css'

export const Home = () => {
  function entrarNaPagina() {
    alert("Essa função e para logar");
  }

  function esqueciMinhaSenha() {
    alert("Essa função e de esqueci minha senha");
  }

  function cadastrarUsuario() {
    alert("Essa função e para cadastrar");
  }
  
  
  return (
    <>
    
    <div className="container">
      
      <ContainerText nome="Felipe">
        Usuario cadastrado com sucesso
      </ContainerText>

      <ContainerText nome="Felipe">
        Faltou inserir informações de login
      </ContainerText>
      
      
      {/* <ButtonComponents nome="Entrar" /> */}

      {/* <ButtonComponents 
        nome="Cadastrar" 
        funcao={cadastrarUsuario} 
      />

      <ButtonComponents 
        nome="Entrar" 
        funcao={entrarNaPagina} 
      />

      <ButtonComponents 
        nome="Esqueci minha senha" 
        funcao={esqueciMinhaSenha} 
      /> */}
    </div>
    </>

  );
};

