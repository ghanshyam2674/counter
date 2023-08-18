import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>{count} </h1>
      <button onClick={() => setCount(() => count + 1)}> increment</button>
      <button onClick={() => setCount(() => count - 1)}> increment</button>
    </>
  )
}

export default App