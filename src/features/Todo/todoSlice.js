import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "Demo-Task", markDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //state and action

    addtodo: (state, action) => {
      const newTodo = { id: nanoid(), task: action.payload, markDone: false };
      state.todos.push(newTodo); //direct mutation
    },
  },
  deleteTodo: (state, action) => {
    //action payload
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  },
  markAsDone: (state, action) => {
    state.todos = state.todos.map((todo) => {
      if (todo.id === action.payload) {
        todo.markDone = true;
      }
    });
  },
});

export const { addtodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
