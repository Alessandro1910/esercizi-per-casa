import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null); 

  return (
    <div>
      <label>
        Inserisci un testo:
        <input type="text" ref={inputRef} /> 
      </label>
      <button >Mostra valore</button>
    </div>
  );
};

export default UncontrolledInput;