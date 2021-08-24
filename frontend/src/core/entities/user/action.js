import { ActionType } from "./actionType";

export const AuthAction = {
    details(values) {
        return {
            type: ActionType.GET_USER_DETAILS_BEGIN,
            values
        }
    },
}