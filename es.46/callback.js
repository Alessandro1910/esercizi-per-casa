import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "./todoSlice";
import useFilteredTodos from "./useFilteredTodos";

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTodos = useFilteredTodos(todos, searchTerm);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <div>
      <input
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
