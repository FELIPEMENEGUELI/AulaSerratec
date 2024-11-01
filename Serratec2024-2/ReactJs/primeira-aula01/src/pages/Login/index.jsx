import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Container, Tittle, ContentForms } from "./style";

export const Login = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <Container>
      <ContentForms>
        <Tittle>Login</Tittle>

        <InputField propsplaceholder="Digite seu login" propstype="email" />

        <InputField propsplaceholder="Digite sua senha" propstype="password" />

        <Button title="Entrar" handleFunction={handleLogin} />
      </ContentForms>
    </Container>
  );
};
