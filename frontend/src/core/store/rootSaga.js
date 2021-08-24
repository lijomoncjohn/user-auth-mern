import { all } from 'redux-saga/effects';
import { loginWatch } from '../entities/auth/saga';
import { userDetailsWatch } from '../entities/user/saga';

export default function* rootSaga() {
    yield all([
        loginWatch(),
        userDetailsWatch()
    ])
}