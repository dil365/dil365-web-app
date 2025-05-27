import { createSlice } from "@reduxjs/toolkit";
import type { LoginFieldsCanBe, LoginFormType } from "../types/auth.types";

const initialState: LoginFormType = {
    email: null,
    password: null,
}
const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setFormValue: (state, action) => {
            state[action.payload.key as LoginFieldsCanBe] = action.payload.value.trim();
        }
    }
});

export const { setFormValue } = loginSlice.actions;
export default loginSlice.reducer;
