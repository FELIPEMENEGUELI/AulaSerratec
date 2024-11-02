import { useEffect, useState } from "react";
import { ButtonComponents } from "../../components/ButtonComponents";
import { ContainerText } from "../../components/ContainerText";
import { useProps } from "../../hooks/useProps";
import {About} from '../About'
import './style.css'
import { GetUsers } from "../../services/GetUsers";
import { Api } from "../../services/api";

export const Home = () => {

  // const { email } = useProps();

  const [idUser, setIdUser] = useState('');

  function entrarNaPagina() {
    alert("Essa função e para logar");
  }

  function esqueciMinhaSenha() {
    alert("Essa função e de esqueci minha senha");
  }

  function cadastrarUsuario() {
    alert("Essa função e para cadastrar");
  }

  async function carregarDadosApi() {
    const response = await GetUsers();

    if (response.status === 200) {
      console.log("Retorno api", response.data);
    } else {
      console.log("Erro ao carregar dados");
    }
  }


  const deleteUser = async () => {
    const user = {
      id: idUser
    }

    const endpointUser = import.meta.env.VITE_URL_USERS;

    try {

      const response = await Api.delete(`${endpointUser}/${user.id}`)
      
      if(response.status === 200 || response.status === 201) {
        console.log("Usuário deletado com sucesso")
        carregarDadosApi();
      } else {
        console.log("Erro ao deletar o usuário")
      }
      
    } catch (error) {

      console.log('Error:', error)
    }

  }


  useEffect(() => {
    carregarDadosApi();
  }, []);
  
  
  return (
    <>
    
    <div className="container">
      <ContainerText nome="Felipe">
        Usuario cadastrado com sucesso
      </ContainerText>

      {/* <span>Ola, {email} </span> */}

      <input 
        onChange={(e) => setIdUser(e.target.value)}
        placeholder="Digite o id"
        type="text"
        value={idUser}
      />

      <button onClick={deleteUser}>Deletar usuario</button>

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

