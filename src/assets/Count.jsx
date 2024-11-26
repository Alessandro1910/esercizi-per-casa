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

    return (
      <>
        <button onClick={handleIncrement}>CountAdd:{count}</button>
        <br />
        <button onClick={handleDecrement}>CountRemove:{count}</button>
      </>
    )
  }
  
  export default Count