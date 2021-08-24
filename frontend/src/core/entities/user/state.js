import { ApiStatus } from "../../base/constants";

export const initialUserState = {
    apiStatus: ApiStatus.LOADING,
    user: {
        success: false,
        message: null,
        data: {},
        error: {},
    }
}