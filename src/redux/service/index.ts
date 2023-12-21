import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../axios-set-up/api';

export const demoApi = createAsyncThunk('login', async (bodyParams, thunkAPI) => {
  try {
    const response = await API.post(`/admin/login`, bodyParams);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
