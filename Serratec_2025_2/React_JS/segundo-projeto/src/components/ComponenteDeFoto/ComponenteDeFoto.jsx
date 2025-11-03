import FotoDefault from '../../assets/default.png'

export const ComponenteDeFoto = (props) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid black'}}>
      <div>
        <img src={props.fotoRecebida ? props.fotoRecebida : FotoDefault} width="40px" height="40px" />
      </div>
      <div>
        <h4>{props.informacaoAlterada ? props.informacaoAlterada : 'Titulo antigo'}</h4>
        <span>SubTitulo</span>
      </div>
    </div>
  )
}