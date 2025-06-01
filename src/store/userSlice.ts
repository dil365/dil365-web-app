import { createSlice } from "@reduxjs/toolkit";
import type { UserInitialStateType } from "../types/user.types";
import type { RegisterFieldsCanBe } from "../types/auth.types";

const initialState: UserInitialStateType = {
  user_data: {
    user_id: null,
    first_name: null,
    last_name: null,
    birthdate: null,
    email: null,
  }
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserValue: (state, action) => {
      state.user_data[action.payload.key as RegisterFieldsCanBe] = action.payload.value.trim();
    },
    setUserAuth: (state, action) => {
      state.user_data.user_id = action.payload.user_id;
      state.user_data.email = action.payload.email;
      state.user_data.first_name = action.payload.first_name;
      state.user_data.last_name = action.payload.last_name;
      if(action.payload.birthdate){
         let bdate = action.payload.birthdate.split('T')[0];
         bdate = bdate.split('-').reverse().join('.');
         state.user_data.birthdate = bdate;
      }
     
    }
  },
  selectors: {
    userId: (state) => state.user_data.user_id,
    userFullname: (state) => `${state.user_data.first_name} ${state.user_data.last_name}`
  }
});
export const { setUserValue, setUserAuth } = userSlice.actions;
export const { userId, userFullname } = userSlice.selectors;
export default userSlice.reducer;
