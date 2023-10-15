import { createSlice } from "@reduxjs/toolkit";

import { addTask, deleteTask, fetchTasks, toggleCompleted } from "../operation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected]: handleRejected,

    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected]: handlePending,

    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteTask.rejected]: handlePending,

    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleCompleted.rejected]: handlePending,
  },
});

export const tasksReducer = tasksSlice.reducer;
