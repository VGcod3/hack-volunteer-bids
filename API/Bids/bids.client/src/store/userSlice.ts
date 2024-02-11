import { createSlice } from '@reduxjs/toolkit';

export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserDataUpdate = {
  firstName: string;
  lastName: string;
  password: string;
};

export type TokensData = {
  refreshToken: string;
  accessToken: string;
};

export type FullUserData = {
  tokensData: TokensData | null;
  userData: UserData | null;
};

const initialState: FullUserData = {
  userData: null,
  tokensData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.userData = action.payload;
    },
    //for logout or delete user
    clearUser(state) {
      state.userData = initialState.userData;
      state.tokensData = initialState.tokensData;
    },
    setTokens(state, action) {
      state.tokensData = action.payload;
    },
  },
});

export const { setTokens, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
