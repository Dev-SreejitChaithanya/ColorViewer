import colorNames from 'colornames'
const Input = ({
    colorValue,setColorValue,setHexValue,setIsDarkText
}) => {


    
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            }}></form>
      <label>Add Color Name</label>
      <input
      autoFocus
      type="text"
      placeholder="Add color Area"
      required
      value={colorValue}
      onChange={(e)=>{
        setColorValue(e.target.value)
        setHexValue(colorNames(e.target.value))
        }}/>
    </div>
  )
}

export default Input
