import { ApiStatus } from "../../base/constants";

export const initialAuthState = {
    apiStatus: ApiStatus.LOADING,
    login: {
        success: false,
        message: null,
        data: {},
        error: {},
    }
}