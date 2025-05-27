import { createSlice } from "@reduxjs/toolkit";
import type { RegisterFieldsCanBe, RegisterFormType } from "../types/auth.types";

const initialState: RegisterFormType = {
    first_name: null,
    last_name: null,
    birthdate: null,
    email: null,
    password: null,
}
const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setFormValue: (state, action) => {
            state[action.payload.key as RegisterFieldsCanBe] = action.payload.value.trim();
        }
    },
});

export const { setFormValue } = registerSlice.actions;
export default registerSlice.reducer;
