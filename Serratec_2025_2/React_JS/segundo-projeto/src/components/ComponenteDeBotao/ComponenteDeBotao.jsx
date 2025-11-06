import MeusModulosDeEstilos from './style.module.css';

export const ComponenteDeBotao = ({title, foto}) => {

    return (
    <button className={MeusModulosDeEstilos.button}>
        {title ? title : 'Texto padrao'}
        {/* <img src={foto && foto} width="30px" height="30px" /> */}
        {/* {sofredor} */}

        {foto && (
            <img src={foto} width="30px" height="30px" />
        )}
      </button>
    )
}
