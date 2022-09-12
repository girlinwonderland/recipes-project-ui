import {call, put} from 'typed-redux-saga';
import { logout } from '../../services';
import {setSignInError, setSignInLoading, setSignInSuccess} from "../actions";

export function* logOutSaga() {
    yield put(setSignInLoading(true));
    try {
        // @ts-ignore
        yield* call(logout);
        localStorage.removeItem('token');
        yield put(setSignInLoading(false));
        yield put(setSignInSuccess(false));
    } catch (error){
        yield put(setSignInError(true));
        yield put(setSignInLoading(false));
    }
}
