import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.ts';
import registerReducer from './registerSlice';
import loginReducer from './loginSlice';
import authReducer from './authSlice.ts';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    register: registerReducer,
    login: loginReducer,
  },
});

export default store;
