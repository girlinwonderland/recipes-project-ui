import {call, put} from 'typed-redux-saga';
import { checkauth } from '../../services';
import { setSignInLoading, setSignInSuccess } from '../actions';

export function* checkAuth() {

    // yield put(setSignInLoading(true))
    try {
        // @ts-ignore
        const response = yield* call(checkauth);
        localStorage.setItem('token', response.data.accessToken)
        yield put(setSignInLoading(false));
        yield put(setSignInSuccess(true));
    } catch (error){
        // yield put(setSignInError(true));
        // yield put(setSignInLoading(false));
    }
}
