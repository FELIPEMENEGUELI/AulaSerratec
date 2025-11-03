
const ComponenteDeBotao = ({title, foto}) => {

    return (
    <button style={{ 
        border: "1px dashed red", 
        borderRadius: "10px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '10px'
      }}>
        {title ? title : 'Texto padrao'}
        {/* <img src={foto && foto} width="30px" height="30px" /> */}

        {foto && (
            <img src={foto} width="30px" height="30px" />
        )}
      </button>
    )
}

export default ComponenteDeBotao;