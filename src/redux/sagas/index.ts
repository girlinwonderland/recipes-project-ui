import { takeEvery, all } from 'redux-saga/effects';

import { SIGN_UP_REQUEST, SIGN_IN_REQUEST } from '../actions';
import { signUpSaga } from './signUp';
import { signInSaga } from './signIn';

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield all([
        takeEvery(SIGN_IN_REQUEST, signInSaga),
        takeEvery(SIGN_UP_REQUEST, signUpSaga)
    ]);
}
