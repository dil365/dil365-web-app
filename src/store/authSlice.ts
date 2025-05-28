import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      if (action.payload.token) {
        state.token = action.payload.token;
        localStorage.setItem('access_token', action.payload.token.toString());
      }
    }
  },
  selectors: {
    getToken: (state) => {
      return state.token;
    }
  }
});

export const { setToken } = authSlice.actions;
export const { getToken } = authSlice.selectors;

export default authSlice.reducer;


