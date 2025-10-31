import './style.css'

// function ButtonComponent(props) {
function ButtonComponent({batata}) {

  return (
    // <button className='button'>
    //   {props.batata}
    //   {props.icone}
    // </button>
    <button className='button'>
      {batata ? batata : 'Clique aqui'}
    </button>
  )
}

export default ButtonComponent;