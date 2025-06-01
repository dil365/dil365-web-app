import { $get, $post } from "../configs/api.config"
import type { LoginFormType, RegisterFormType } from "../types/auth.types";

export const _UsersService = {
    me: {
        async GET() {
            return await $get('v1/users/me');
        }
    },
    register: {
        async POST(payload: RegisterFormType) {
            return await $post('v1/users/register', payload);
        }
    },
    login: {
        async POST(payload: LoginFormType) {
            return await $post('v1/users/login', payload);
        }
    }
}
