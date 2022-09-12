import { takeEvery, all } from 'redux-saga/effects';
import { SIGN_UP_REQUEST, SIGN_IN_REQUEST, CHECK_AUTH, LOGOUT } from '../actions';
import { signUpSaga } from './signUp';
import { signInSaga } from './signIn';
import { checkAuth } from './checkAuth';
import { logOutSaga } from './logOut';

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield all([
        takeEvery(SIGN_IN_REQUEST, signInSaga),
        takeEvery(SIGN_UP_REQUEST, signUpSaga),
        takeEvery(CHECK_AUTH, checkAuth),
        takeEvery(LOGOUT, logOutSaga)
    ]);
}
