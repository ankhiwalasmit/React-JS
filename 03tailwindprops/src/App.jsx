import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

// Every parent component can pass some information to its child components by giving them props. you can pass any JavaScript value through them, including objects, arrays, and functions.
function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    usernmae: "smit",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    // props makes the component reuseable
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* <Card channel = "chaiaurcode" someObject = {newArr} /> */}
      <Card username = "chaiaurcode" btnText = "click me" />
      <Card username = "smit" />
    </>
  )
}

export default App
