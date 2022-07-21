import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Image from './components/Image'

function App() {
  //set count es la funcion que cambia el estado
  //     valor  funcion
  // const [count, setCount] = useState(0)
  //un estado puede cambiar la vista 
  //una variable normal no

  const [isShow, setIsShow] = useState(false)
  // console.log(count)

  const togleState = () => {
    setIsShow(!isShow)
  }
  

  // const handlePlus = () =>{
  //   setCount(count + 1)
  // }

  // const handleMinus = () => {
  //   setCount(count - 1)
  // }

  // // const handleMinus = () => {
  // //   setCount(count - 1)
  // // }

  // const handleReset = () => {
  //   setCount(0)
  //   //setCount(count - count)
  // }

  return (
    <div className="App">
     <h1>
      {
        isShow ? <Image /> : 'Hay una imagen oculta'
      }
     </h1>

     <button onClick={togleState}>Change Status</button>
     
    </div>
  )
}

export default App
