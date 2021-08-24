import { ActionType } from "./actionType";

export const UserAction = {
    details(token) {
        return {
            type: ActionType.GET_USER_DETAILS_BEGIN,
            token
        }
    },
}