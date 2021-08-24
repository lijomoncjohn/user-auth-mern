import { createReducer } from "@reduxjs/toolkit";

import { ApiStatus, AUTH_STATE } from "../../base/constants";
import { ActionType } from "./actionType";
import { initialAuthState } from './state'

const reducer = createReducer(initialAuthState, {
    // Login
    [ActionType.LOGIN_BEGIN]: (state) => {
        state.login.success = ApiStatus.LOADING;
        state.login.message = null;
        state.login.data = {};
        state.login.error = null;
    },
    [ActionType.LOGIN_SUCCESS]: (state, data) => {
        state.apiStatus = 1;
        if (data.data.success) {
            state.login.success = AUTH_STATE.LOGIN_SUCCESS;
            state.login.message = data.data.message || 'success';
            state.login.error = null;
            state.login.data = data.data.data;
        } else {
            state.login.success = AUTH_STATE.LOGIN_FAILED;
            state.login.message = data.data.message;
            state.login.error = data.data.error;
        }
    },
    [ActionType.LOGIN_FAILED]: (state, data) => {
        state.apiStatus = 1;
        state.login.success = AUTH_STATE.LOGIN_FAILED;
        state.login.message = data.data.message;
        state.login.error = data.data.error;
    },
    // Reset authentication state
    [ActionType.RESET_AUTH]: (state) => {
        state.login.success = false;
        state.login.message = null;
        state.login.error = null;
        state.login.data = {};
    },
    // Logout
    [ActionType.LOGOUT_BEGIN]: (state) => {
        state.logout.success = ApiStatus.LOADING;
        state.logout.message = null;
        state.logout.data = {};
        state.logout.error = null;
    },
    [ActionType.LOGOUT_SUCCESS]: (state, data) => {
        state.apiStatus = 1;
        if (data.data.success) {
            state.logout.success = AUTH_STATE.LOGOUT_SUCCESS;
            state.logout.message = data.data.message || 'success';
            state.logout.error = null;
            state.logout.data = data.data.data;
        } else {
            state.logout.success = AUTH_STATE.LOGOUT_FAILED;
            state.logout.message = data.data.message;
            state.logout.error = data.data.error;
        }
    },
    [ActionType.LOGOUT_FAILED]: (state, data) => {
        state.apiStatus = 1;
        state.logout.success = AUTH_STATE.LOGOUT_FAILED;
        state.logout.message = data.data.message;
        state.logout.error = data.data.error;
    },
})
debugger;

export default reducer;