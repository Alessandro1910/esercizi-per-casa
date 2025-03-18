import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, text: "Learn Redux", completed: false },
    { id: 2, text: "Build a Redux App", completed: false },
  ],
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;