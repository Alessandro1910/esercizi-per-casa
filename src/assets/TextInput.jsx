import { useState } from "react"

const TextInput = () => {
  
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
      <>
        <div>
        <label className="p-2">Input Value:</label>
            <input 
            type="text" 
            value={value}
            onChange={handleChange}
            placeholder="Indica il tipo"
            />
            </div>
      </>
    )
  }
  
  export default TextInput