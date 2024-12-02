import React, { useState } from 'react'

const StateData = () => {
    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(count + 1);
    }
    
    const handleDecrement = () => {
        setCount(count - 1);
    }
  return (
    <>
        <h1>Count = {count}</h1>
        <button className='btn btn-primary mr-3' onClick={handleIncrement}> Increment </button>
        <button className='btn btn-info' onClick={handleDecrement}> Decrement </button>
    </>
  )
}

export default StateData