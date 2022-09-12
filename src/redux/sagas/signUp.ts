import { call, put } from 'typed-redux-saga';
import { signUpRequest, setSignUpLoading, setSignUpError, setSignUpSuccess } from '../actions';
import { registration } from '../../services';

export function* signUpSaga({ payload }: ReturnType<typeof signUpRequest>) {

    yield put(setSignUpLoading(true));
    try {
        // @ts-ignore
        yield* call(registration, payload);
        yield put(setSignUpLoading(false));
        yield put(setSignUpSuccess(true));
    } catch (error){
        yield put(setSignUpError(true));
        yield put(setSignUpLoading(false));
    }
}
