import { put, takeLatest } from 'redux-saga/effects';

import { ActionType } from './actionType';
import { Service } from './service';

const userDetailsSaga = function* (action) {
    const userResponse = yield Service.getUserDetails(action.token);

    if (!userResponse.error) {
        yield put({
            type: ActionType.GET_USER_DETAILS_SUCCESS,
            data: userResponse.value,
        });
    } else {
        yield put({
            type: ActionType.GET_USER_DETAILS_FAILED,
            data: userResponse.value,
        });
    }
};

const userDetailsWatch = function* () {
    yield takeLatest(ActionType.GET_USER_DETAILS_BEGIN, userDetailsSaga);
};

export { userDetailsWatch }