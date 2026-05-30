
export const CardUser = ({ data }) => {
  return (
    <>
      {data.map((aluno, index) => (
        <div key={`${aluno.id}_${index}`} style={{ backgroundColor: 'gray' }}>
          <p>Nome: {aluno.nome}</p>
          <p>Idade: {aluno.idade}</p>
          <p>Ativo: {aluno.ativo}</p>
          <p>Profissão: {aluno.profissao}</p>
        </div>
      ))}
    </>
  )
}
