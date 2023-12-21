import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reducers from '../reducer';

const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
