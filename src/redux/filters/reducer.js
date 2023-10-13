// import { createReducer } from "@reduxjs/toolkit";
// import { statusFilter } from "./constants";
// import {
//   addTask,
//   deleteTask,
//   toggleCompleted,
//   setStatusFilter,
// } from "./actions";

// const tasksInitialState = [
//   { id: 0, text: "Learn HTML and CSS", completed: true },
//   { id: 1, text: "Get good at JavaScript", completed: true },
//   { id: 2, text: "Master React", completed: false },
//   { id: 3, text: "Discover Redux", completed: false },
//   { id: 4, text: "Build amazing apps", completed: false },
// ];
// // Отвечает только за обновление свойства tasks
// // Теперь значением параметра state будет массив задач
// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteTask]: (state, action) => {
//     return state.filter((task) => task.id !== action.payload);
//   },
//   [toggleCompleted]: (state, action) => {
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//       }
//     }
//   },
// });

// const filtersInitialState = {
//   status: statusFilter.all,
// };
// // Отвечает только за обновление свойства filters
// // Теперь значением параметра state будет объект фильтров
// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     state.status = action.payload;
//   },
// });
