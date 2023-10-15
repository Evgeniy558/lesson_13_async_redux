import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.tasks.items;
export const selectIsLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;
export const selectFilter = (state) => state.filters.status;
export const selectVisibleTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, statusFilter) => {
    console.log("Calculating selectVisibleTasks");
    const taskList =
      statusFilter === "active"
        ? tasks.filter((task) => !task.completed)
        : statusFilter === "completed"
        ? tasks.filter((task) => task.completed)
        : tasks;
    return taskList;
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  console.log("Calculating task count");
  const taskCount = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    {
      active: 0,
      completed: 0,
    }
  );
  return taskCount;
});
