import { call, put } from 'typed-redux-saga';
import { setSignInLoading, setSignInError, signInRequest, setSignInSuccess } from '../actions';
import { login } from '../../services';

export function* signInSaga({ payload }: ReturnType<typeof signInRequest>) {

    yield put(setSignInLoading(true))
    try {
        // @ts-ignore
        yield* call(login, payload);
        yield put(setSignInLoading(false));
        yield put(setSignInSuccess(true));
    } catch (error){
        yield put(setSignInError(true));
        yield put(setSignInLoading(false));
    }
}
