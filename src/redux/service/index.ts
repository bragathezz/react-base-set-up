import { createAsyncThunk } from '@reduxjs/toolkit';

export const demoApi = createAsyncThunk('login', async (bodyParams: number, thunkAPI) => {
  try {
    const response = 1 + bodyParams;
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
