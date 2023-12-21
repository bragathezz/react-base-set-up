import { createAsyncThunk } from '@reduxjs/toolkit';
import store from '../store';

export const demoApi = createAsyncThunk('login', async (bodyParams, thunkAPI) => {
  try {
    const response = (await store.getState().demo.loginRes.data) + 1;
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
