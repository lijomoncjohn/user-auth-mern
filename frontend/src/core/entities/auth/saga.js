import { put, takeLatest } from 'redux-saga/effects';

import { ActionType } from './actionType';
import { Service } from './service';

const loginSaga = function* (action) {
    const loginResponse = yield Service.login(action.values);

    if (!loginResponse.error) {
        yield put({
            type: ActionType.LOGIN_SUCCESS,
            data: loginResponse.value,
        });
    } else {
        yield put({
            type: ActionType.LOGIN_FAILED,
            data: loginResponse.value,
        });
    }
};

const loginWatch = function* () {
    yield takeLatest(ActionType.LOGIN_BEGIN, loginSaga);
};

const logoutSaga = function* (action) {
    const logoutResponse = yield Service.logout(action.token);

    if (!logoutResponse.error) {
        yield put({
            type: ActionType.LOGOUT_SUCCESS,
            data: logoutResponse.value,
        });
    } else {
        yield put({
            type: ActionType.LOGOUT_FAILED,
            data: logoutResponse.value,
        });
    }
};

const logoutWatch = function* () {
    yield takeLatest(ActionType.LOGOUT_BEGIN, logoutSaga);
};

export { loginWatch, logoutWatch }