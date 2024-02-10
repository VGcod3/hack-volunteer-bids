import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LotType = {
  name: string;
  description: string;
  startPrice: number;
  highestPrice: number;
  placedBy: string;
  currency: string;
  images: string[];

  auctionStart: string;
  auctionEnd: string;
};

type LotState = { lots: LotType[]; loading: boolean; error: string | null };

const initialState: LotState = { lots: [], loading: false, error: null };

const lotSlice = createSlice({
  name: 'lot',
  initialState,
  reducers: {
    fetchLotsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchLotsSuccess(state, action: PayloadAction<LotType[]>) {
      state.lots = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchLotsFailure(state, action: PayloadAction<{ error: string }>) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { fetchLotsStart, fetchLotsSuccess, fetchLotsFailure } = lotSlice.actions;

export default lotSlice.reducer;
