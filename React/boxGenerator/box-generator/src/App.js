import logo from './logo.svg';
import React, { useState } from "react"
import './App.css';
import AddBox from "./components/AddBox"
import Box from "./components/Box"

const App = () => {
  const [boxes, setBoxes] = useState([])

  const [boxColorSize, setBoxColorSize] = useState({color: "", size: ""})

    return (
      <div className="App">
        <AddBox 
          setBoxes= {setBoxes} 
          boxes= {boxes}
          boxColorSize ={boxColorSize}
          setBoxColorSize={setBoxColorSize}
        />
        {
          boxes.map(box => 
          <Box color={box.color} height={box.height} width={box.width}/>)
        }
      </div>
    );
  }

export default App;
