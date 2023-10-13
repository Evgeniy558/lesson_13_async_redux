import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import { addTask, deleteTask, fetchTasks, toggleCompleted } from "../operation";

// const tasksInitialState = [
//   { id: 0, text: "Learn HTML and CSS", completed: true },
//   { id: 1, text: "Get good at JavaScript", completed: true },
//   { id: 2, text: "Master React", completed: false },
//   { id: 3, text: "Discover Redux", completed: false },
//   { id: 4, text: "Build amazing apps", completed: false },
// ];
const tasksSlice = createSlice({
  name: "tasks",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addTask.pending](state) {
      state.isLoading = true;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteTask.pending](state) {
      state.isLoading = true;
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(index, 1);
      // state.error = null;
      // state.items.forEach((item) => {
      //   return item.id !== action.payload.id;
      // });
      // const index = state.items.findIndex(
      //   (task) => task.id === action.payload.id
      // );
      // state.items.splice(index, 1);
    },
    // state.items.filter((item) => item.id !== action.payload.id);

    [deleteTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [toggleCompleted.pending](state) {
      state.isLoading = true;
    },
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      for (const item of state.items) {
        if (item.id === action.payload.id) {
          item.completed = !item.completed;
        }
      }
    },
    [toggleCompleted.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // addTask: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare(text) {
    //     return { payload: { id: nanoid(), text, completed: false } };
    //   },
    // },
    // deleteTask(state, action) {
    //   return state.filter((task) => task.id !== action.payload);
    // },
    // toggleCompleted(state, action) {
    //   for (const task of state) {
    //     if (task.id === action.payload) {
    //       task.completed = !task.completed;
    //     }
    //   }
    // },
  },
});
// export const { fetchInProgres, fetchSuccess, fetchError } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
