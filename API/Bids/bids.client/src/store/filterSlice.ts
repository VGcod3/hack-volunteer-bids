import { createSlice } from '@reduxjs/toolkit';

interface FilterOption {
  value: string;
  label: string;
  checked: boolean;
}

interface Filter {
  id: string;
  name: string;
  options: FilterOption[];
}

interface PriceFilter {
  id: string;
  name: string;
  min: number;
  max: number;
  value: [number, number];
}

interface FilterState {
  filters: Filter[];
  priceFilter: PriceFilter;
  currentPage: number;
  totalPages: number;
  sortBy: string; // Added sortBy property
}

const initialState: FilterState = {
  filters: [
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'house', label: 'house', checked: true },
        { value: 'apartment', label: 'apartment', checked: true },
        { value: 'hotel Room', label: 'hotel-room', checked: true },
        { value: 'cottage', label: 'cottage', checked: true },
      ],
    },
    {
      id: 'visitors',
      name: 'Visitors',
      options: [
        { value: '1 adult', label: '1 adult', checked: true },
        { value: '2 adults', label: '2 adults', checked: true },
        { value: '2 adults, 1 child', label: '2 adults, 1 child', checked: true },
        { value: '2 adults, 2 children', label: '2 adults, 2 children', checked: true },
        { value: '2 adults, 3 children', label: '2 adults, 3 children', checked: true },
        { value: '6+ people', label: '6+ people', checked: true },
      ],
    },
  ],
  priceFilter: {
    id: 'price',
    name: 'Price',
    min: 0,
    max: 1000,
    value: [0, 1000],
  },
  currentPage: 1,
  totalPages: 10,
  sortBy: 'Most Popular', // Initialize sortBy property
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
    setFiltersOptions: (state, action) => {
      const { filterId, optionValue } = action.payload;

      const filter = state.filters.find((f) => f.id === filterId);
      const option = filter?.options.find((o) => o.value === optionValue);

      if (filter && option) {
        option.checked = !option.checked;
      }
    },
    setPriceFilter: (state, action) => {
      state.priceFilter.value[0] = action.payload.min;
      state.priceFilter.value[1] = action.payload.max;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setFiltersOptions, setCurrentPage, setTotalPages, setPriceFilter, setSortBy } =
  filterSlice.actions;
export default filterSlice.reducer;
