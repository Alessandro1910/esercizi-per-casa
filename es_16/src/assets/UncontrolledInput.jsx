import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null); 

  const handleButtonClick = () => {
    alert(`Il valore dell'input è: ${inputRef.current.value}`);
  };

  return (
    <div>
      <label>
        Inserisci un testo:
        <input ref={inputRef} type="text" /> 
      </label>
      <button onClick={handleButtonClick}>Mostra valore</button>
    </div>
  );
};

export default UncontrolledInput;