import { createAsyncThunk } from '@reduxjs/toolkit';

export const demoApi = createAsyncThunk('login', async (bodyParams: number, thunkAPI) => {
  try {
    const response = bodyParams;
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
