import React, { useState } from 'react'

function App(){
  let [counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter

  const handleClick = () => {
    changeCounter(counter + 1);
  };

  return (
    <div className='container'>
      <button onClick={handleClick}>Click me</button>
      <h1>Counter: {counter}</h1>
      <h4>Counter2: {counter}</h4>
    </div>
  )
}

export default App;