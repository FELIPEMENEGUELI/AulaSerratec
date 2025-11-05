import { useLocation, useParams } from "react-router";

export const About = () => {

  const location = useLocation();
  const { aluno } = location.state || '';

  const { id } = useParams();
  console.log('id', id)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      Bem vindo, {aluno}!
    </div>
  )
}
