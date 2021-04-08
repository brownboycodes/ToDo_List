import { configureStore } from "@reduxjs/toolkit";
import allTodosReducer from "./allTodosSlice";

export default configureStore({
  reducer: {
    allTodos: allTodosReducer,
  },
});
