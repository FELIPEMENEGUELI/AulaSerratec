import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Container, Tittle, ContentForms } from "./style";
import { useState } from "react";
import { useProps } from "../../hooks/useProps";

export const Login = () => {

  const navigate = useNavigate();

  const { setEmail } = useProps();

  const pegarValorInput = (e) => {
    console.log('valor', e.target.value);
    setEmail(e.target.value)
  }

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <Container>
      <ContentForms>
        <Tittle>Login</Tittle>

        <InputField 
          propsplaceholder="Digite seu login" 
          propstype="email" 
          handleFunction={pegarValorInput}
        />

        <Button title="Entrar" handleFunction={handleLogin} />
      </ContentForms>
    </Container>
  );
};
