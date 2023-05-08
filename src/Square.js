
const Square = ({colorValue,hexValue,IsDarkText}) => {
  return (
    <section className="square"
    style={{backgroundColor:colorValue,color:IsDarkText?"#000":"#fff"}}>
      <p>{colorValue ?colorValue:"Empty value"}</p>
      <p>{hexValue?hexValue:null}</p>
    </section>
  )
}

Square.defaultProps={
    colorValue:"Empty Color Value"
}
export default Square
