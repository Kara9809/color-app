import { useState } from "react"
import ColorPicker from "./ColorPicker"

const App = () => {

  const [counter, setCounter] = useState(0);
  



  const handleButtonClick = () => {
    console.log("I got clicked")
    counter++;
    console.log("counter " + counter)
  }

  return (
    <>
      <button onClick={() => handleButtonClick()}>click me</button>
      {/* <ColorPicker /> */}
      <div>{counter}</div>
    </>
  )
}

export default App
