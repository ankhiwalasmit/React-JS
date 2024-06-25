import Chai from "./chai"

function App() {
  const username = "chai aur code"

  return (
    // we can return only one element in jsx
    // <div>
    //  <Chai/>  
    //  <h1>Chai aur React</h1> 
    //  <p>test para</p>
    // </div>

    // fragment
    <>
      <Chai/>  
      <h1>Chai aur React {username}</h1> 
      <p>test para</p>
    </>
  )
}

export default App
