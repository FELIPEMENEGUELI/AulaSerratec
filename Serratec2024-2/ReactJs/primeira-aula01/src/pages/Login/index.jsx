import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Container, Tittle, ContentForms } from "./style";

export const Login = () => {

  const handleLogin = () => {
    alert("Login");
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
