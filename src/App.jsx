import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  //un estado puede cambiar la vista 
  //una variable normal no
  console.log(count)

  const handlePlus = () =>{
    setCount(count + 1)
  }

  const handleMenos = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(count - count)
  }

  return (
    <div className="App">
     <h1>{count}</h1>
     <button onClick={handlePlus}>+1</button>
     <button onClick={handleMenos}>-</button>
     <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
