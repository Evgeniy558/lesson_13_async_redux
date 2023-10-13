import axios from "axios";
// import { fetchError, fetchInProgres, fetchSuccess } from "./Slices/tasksSlicer";
import { useDispatch } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6527b607931d71583df13aa7.mockapi.io";

// export const fetchTasks = () => async (dispatch) => {
//   try {
//     dispatch(fetchInProgres());

//     const responce = await axios.get("/tasks");
//     dispatch(fetchSuccess(responce.data));
//   } catch (error) {
//     dispatch(fetchError(error));
//   }
// };
// export const fetchTasks = createAsyncThunk('tasks/getAll', async () => {
//     const responce = await axios.get('/tasks');
//     return responce.data
// })
export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkApi) => {
    try {
      const responce = await axios.post("/tasks", { text });
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (task, thunkAPI) => {
    try {
      const responce = await axios.delete(`/tasks/${task.id}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const responce = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
