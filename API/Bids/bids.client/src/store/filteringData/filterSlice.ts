import { createSlice } from '@reduxjs/toolkit';
import { FilterState, SortOptionsEnum } from './filterTypes';

const initialState: FilterState = {
  categories: [
    { value: 0, label: 'Art', checked: true },
    { value: 1, label: 'Collectibles', checked: true },
    { value: 2, label: 'Electronics', checked: true },
    { value: 3, label: 'Fashion', checked: true },
    { value: 4, label: 'Home', checked: true },
    { value: 5, label: 'Jewelry', checked: true },
    { value: 6, label: 'Motors', checked: true },
    { value: 7, label: 'Toys', checked: true },
    { value: 8, label: 'Travel', checked: true },
    { value: 9, label: 'Other', checked: true },
  ],
  priceFilter: {
    min: 0,
    max: 1000,
    value: [0, 1000],
  },
  currentPage: 1,
  searchValue: '',
  totalPages: 10,
  sortBy: SortOptionsEnum['-createdAt'],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.priceFilter.value[0] = action.payload.min;
      state.priceFilter.value[1] = action.payload.max;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
    filterCategories: (state, action) => {
      const categoryIndex = state.categories.findIndex(
        (category) => category.value === action.payload.value,
      );

      state.categories[categoryIndex].checked = !state.categories[categoryIndex].checked;
    },
  },
});

export const {
  filterCategories,
  setCurrentPage,
  setTotalPages,
  setPriceFilter,
  setSortBy,
  setSearch,
} = filterSlice.actions;
export default filterSlice.reducer;
