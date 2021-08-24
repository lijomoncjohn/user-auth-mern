import { ActionType } from "./actionType";

export const AuthAction = {
    login(values) {
        return {
            type: ActionType.LOGIN_BEGIN,
            values
        }
    },
    resetAuth() {
        return {
            type: ActionType.RESET_AUTH,
        };
    },
}