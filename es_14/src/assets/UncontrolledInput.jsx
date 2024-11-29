import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Inserisci qualcosa:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Invia</button>
    </form>
  );
};

export default UncontrolledInput;