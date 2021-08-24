import { createReducer } from "@reduxjs/toolkit";

import { ApiStatus, AUTH_STATE } from "../../base/constants";
import { ActionType } from "./actionType";
import { initialUserState } from './state'

const reducer = createReducer(initialUserState, {
    // Login
    [ActionType.GET_USER_DETAILS_BEGIN]: (state) => {
        state.user.success = ApiStatus.LOADING;
        state.user.message = null;
        state.user.data = {};
        state.user.error = null;
    },
    [ActionType.GET_USER_DETAILS_SUCCESS]: (state, data) => {
        state.apiStatus = 1;
        if (data.data.success) {
            state.user.success = AUTH_STATE.LOGIN_SUCCESS;
            state.user.message = data.data.message || 'success';
            state.user.error = null;
            state.user.data = data.data.data;
        } else {
            state.user.success = AUTH_STATE.LOGIN_FAILED;
            state.user.message = data.data.message;
            state.user.error = data.data.error;
        }
    },
    [ActionType.GET_USER_DETAILS_FAILED]: (state, data) => {
        state.apiStatus = 1;
        state.user.success = AUTH_STATE.LOGIN_FAILED;
        state.user.message = data.data.message;
        state.user.error = data.data.error;
    },
})
debugger;

export default reducer;