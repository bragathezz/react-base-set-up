import { CaseReducerActions, createSlice } from '@reduxjs/toolkit';
import { demoApi } from '../service';

type AsyncAction = {
  isLoading: boolean;
  data: unknown;
  error: unknown;
  reFetchApi: any;
};

type Org = Record<string, AsyncAction>;
const initialState: Org = {};
const asyncActionCases = [{ api: demoApi, name: 'loginRes', isLoading: true, data: 1 }];

asyncActionCases.forEach((api) => {
  initialState[api.name] = {
    isLoading: api.isLoading,
    data: api.data || [],
    error: null,
    reFetchApi: null,
  };
});

export const demoSlice = createSlice({
  name: 'demoSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    asyncActionCases.forEach((asyncAction) => {
      builder
        .addCase(asyncAction.api.fulfilled, (state, { payload }) => {
          state[asyncAction.name].isLoading = false;
          state[asyncAction.name].data = payload;
        })
        .addCase(asyncAction.api.pending, (state) => {
          state[asyncAction.name].isLoading = true;
          state[asyncAction.name].error = null;
        })
        .addCase(asyncAction.api.rejected, (state, { payload }) => {
          state[asyncAction.name].isLoading = false;
          state[asyncAction.name].error = payload;
        });
    });
  },
});

export const demoDispatch: CaseReducerActions<{}, 'demoSlice'> = demoSlice.actions;
