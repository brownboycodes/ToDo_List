import { createSlice } from "@reduxjs/toolkit";

export const allTodosSlice = createSlice({
  name: "allTodos",
  initialState: {
    value: []
  },
  reducers: {
    setTodos: (state, action) => {
      state.value = action.payload;
    },
    addTodo: (state, action) => {
      let previousTodos = state.value;
      previousTodos.push(action.payload);
      state.value = previousTodos;
    },
    updateStatus: (state, action) => {
      let previousTodos = state.value;
      previousTodos = previousTodos.filter(
        (todo) => todo.id !== action.payload.id
      );
      previousTodos.push({
        id: action.payload.id,
        todo: action.payload.todo,
        completed: action.payload.completed,
      });
      state.value = previousTodos;
    },
    deleteTodo: (state, action) => {
      let previousTodos = state.value;
      previousTodos = previousTodos.filter(
        (todo) => todo.id !== action.payload
      );

      state.value = previousTodos;
    },
  },
});

export const {
  setTodos,
  addTodo,
  updateStatus,
  deleteTodo,
} = allTodosSlice.actions;
export default allTodosSlice.reducer;
