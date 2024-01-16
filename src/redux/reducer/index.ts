import { combineReducers } from '@reduxjs/toolkit';

import { demoSlice } from '../slice';

const reducers = combineReducers({
  demo: demoSlice.reducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
