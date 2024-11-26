import { useState } from "react"

const  Count = () => {
  
    const [count, setCount] = useState(0);

   const handleIncrement = () => {
    setCount((count) => {
        return count + 1
    })
   }

   const handleDecrement = () => {
    setCount((count) => {
        return count - 1
    })
   }

   const handleReset = () => {
    setCount((count) => {
        return count = 0
    })
   }


    return (
      <>
        <button onClick={handleIncrement}>CountAdd:{count}</button>
        <br />
        <button onClick={handleDecrement}>CountRemove:{count}</button>
        <br />
        <button onClick={handleReset}>Reset{count}</button>
      </>
    )
  }
  
  export default Count