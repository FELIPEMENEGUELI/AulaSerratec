import { ButtonComponent } from "../../components/Button"
import { CardUser } from "../../components/CardUser";

export const Login = () => {

  const materia = 'Entrar';

  const alunos = [
    {
      id: 1,
      nome: "Ana Silva",
      idade: 28,
      ativo: true,
      profissao: "Engenheira de Software"
    },

    {
      id: 2,
      nome: "Ana Carla",
      idade: 30,
      ativo: false,
      profissao: "Engenheira de produção"
    },

    {
      id: 3,
      nome: "Yuri Vieia",
      idade: 20,
      ativo: true,
      profissao: "Desenvolvedor"
    },

    {
      id: 4,
      nome: "Arthur Carvalho",
      idade: 21,
      ativo: false,
      profissao: "Testador"
    },

  ]

  return (
    <div>
      <h1>pagina de login</h1>

      <ButtonComponent 
        title={materia}
        // status={true}
        onChange={() => alert("Desabilitado")}
      />

      <CardUser data={alunos} />
    </div>
  )
}
