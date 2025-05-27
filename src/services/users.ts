import { $post } from "../configs/api.config"
import type { LoginFormType, RegisterFormType } from "../types/auth.types";

export const _UsersService = {
    register: {
        async POST(payload: RegisterFormType){
            return await $post('v1/users/register', payload);
        }
    },
    login: {
        async POST(payload: LoginFormType){
            return await $post('v1/users/login', payload);
        }
    }
}