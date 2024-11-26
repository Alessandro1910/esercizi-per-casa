import { useState } from "react"

const  Count = () => {
  
    const [count, setCount] = useState(0);

   const handleIncrement = () => {
    setCount((count) => {
        return count + 1
    })
   }

    return (
      <>
        <button onClick={handleIncrement}>Count:{count}</button>
      </>
    )
  }
  
  export default Count