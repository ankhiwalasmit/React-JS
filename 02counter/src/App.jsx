import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    // setCounter(counter)
    // console.log("clicked", counter);
    // setCounter(counter + 1)
    
    if(counter + 1 > 20) {
      return
    } else {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    // setCounter(counter - 1)
    if(counter - 1 < 0) {
      return
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
