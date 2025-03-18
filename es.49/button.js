import React, { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "./todoSlice";
import useFilteredTodos from "./useFilteredTodos";

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [counter, setCounter] = useState(0);
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const incrementCounter = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  const decrementCounter = useCallback(() => {
    setCounter(prev => prev - 1);
  }, []);

  const resetCounter = useCallback(() => {
    setCounter(0);
  }, []);

  const filteredTodos = useMemo(() => useFilteredTodos(todos, searchTerm), [todos, searchTerm]);

  return (
    <div>
      <h2>Contatore: {counter}</h2>
      <button onClick={incrementCounter}>Incrementa</button>
      <button onClick={decrementCounter}>Decrementa</button>
      <button onClick={resetCounter}>Reset</button>

      <input
        ref={searchInputRef}
        type="text"
        placeholder="Cerca to-do..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredTodos.map(todo => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;