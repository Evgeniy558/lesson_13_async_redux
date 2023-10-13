// import { filtersReducer, tasksReducer } from "./filters/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./Slices/tasksSlicer";
import { filtersReducer } from "./Slices/filterSlicer";
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
export const store = configureStore({
  reducer: { tasks: tasksReducer, filters: filtersReducer },
});
