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
    },
    resetToken: (state) => {
      state.token = null;
      localStorage.removeItem('access_token');
    }
  },
  selectors: {
    getToken: (state) => {
      if (state.token) {
        return state.token;
      } else {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
          authSlice.actions.setToken(accessToken);
          return accessToken;
        }
      }
      return null;
    }
  }
});

export const { setToken, resetToken } = authSlice.actions;
export const { getToken } = authSlice.selectors;

export default authSlice.reducer;


