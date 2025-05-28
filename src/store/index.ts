import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import registerReducer from './registerSlice';
import loginReducer from './loginSlice';
import authReducer from './authSlice.ts';

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    register: registerReducer,
    login: loginReducer,
  },
});

export default store;
