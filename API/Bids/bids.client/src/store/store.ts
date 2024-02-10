import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import lotSlice from './lotSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  lot: lotSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
  // Add any middleware or enhancers here
});

export default store;
