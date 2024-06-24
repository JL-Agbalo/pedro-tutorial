import React, { useState } from 'react'

function StateTutorial() {
    const [counter, setCounter] = useState(0);

    const increment = () =>{
        setCounter(counter + 1);
    }

  return (
    <div>
    {counter}    
    <button onClick={increment}>+</button>
    </div>
  )
}

export default StateTutorial