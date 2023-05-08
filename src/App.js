import Square from "./Square";
import Input from "./Input";
import {useState} from 'react'

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [IsDarkText, setIsDarkText] = useState(true)
  return (
    <div className="App">
      <Square colorValue={colorValue} hexValue={hexValue} IsDarkText={IsDarkText}/>
      <Input colorValue={colorValue} setColorValue={setColorValue}
      hexValue={hexValue} setHexValue={setHexValue}
      IsDarkText={IsDarkText}
      setIsDarkText={setIsDarkText}/>
    </div>
  );
}

export default App;
