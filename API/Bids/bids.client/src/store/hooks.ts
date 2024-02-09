import { useDispatch as useTypedDispatch, useSelector as useTypedSelector } from 'react-redux';
import { AppDispatch, RootState } from './store'; // Assuming you have a store setup

// Define your typed selector
export const useSelector = <TSelected>(selector: (state: RootState) => TSelected) =>
  useTypedSelector<RootState, TSelected>(selector);

// Define your typed dispatch
export const useDispatch = () => useTypedDispatch<AppDispatch>();
