import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './filteringData/filterSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
  // Add any middleware or enhancers here
});

export default store;
