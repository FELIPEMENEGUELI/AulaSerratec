import batatinha from './style.module.css'

// function ButtonComponent(props) {
export const ButtonComponent = ({batata}) => {

  return (
    // <button className='button'>
    //   {props.batata}
    //   {props.icone}
    // </button>
    <button className={batatinha.text}>
      {batata ? batata : 'Clique aqui'}
    </button>
  )
}