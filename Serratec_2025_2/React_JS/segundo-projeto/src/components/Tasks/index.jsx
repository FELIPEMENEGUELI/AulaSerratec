export const Tasks = ({tarefas, removerTarefa}) => {

  return (
    <>
      {tarefas.map((tarefa, index) => (
        <div key={`${index}+${tarefa.id} - ${tarefa.titulo}`} style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', marginTop: '10px', padding: '10px' }}> 
          
          <span>Responsavel: {tarefa.responsavel}</span>
          
          <span>Titulo: {tarefa.titulo}</span>

          <button onClick={() => removerTarefa(tarefa.id)} 
            style={{
                backgroundColor: '#f00f0030',
                borderRadius: '5px',
                padding: '5px',
                color: '#000',
                width: '100px',
                fontSize: '12px'
                }}>
            Remover tarefa
          </button>

        </div>
      ))}
    </>
  )
}
