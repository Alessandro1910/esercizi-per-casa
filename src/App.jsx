import { useState } from 'react'
import './App.css'

const App = () => {

  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn((isOn) => {
      return isOn == true ? false : true;
    })
  }

  return (
    <>
      <button 
        className={isOn == true ? "bg-green-500" : "bg-gray-500"} 
        onClick={handleClick}
      >
        {isOn == true ? 'on' : 'off'}
        <button className='Btn-2'></button>
      </button>
     
      </>
  )
}
export default App

