import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import registerReducer from './registerSlice';
import loginReducer from './loginSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: registerReducer,
    login: loginReducer,
  },
});

export default store;