import { call, put } from 'typed-redux-saga';
import { setSignInLoading, setSignInError, signInRequest, setSignInSuccess, setRecipesData } from '../actions';
import { login } from '../../services';

export function* signInSaga({ payload }: ReturnType<typeof signInRequest>) {

    yield put(setSignInLoading(true))
    try {
        // @ts-ignore
        const response = yield* call(login, payload);
        localStorage.setItem('token', response.data.accessToken);
        const modified = response.data.user.posts.map(({ _id, title, description }: any) => ({
            id: _id,
            title,
            description
        }))
        yield put(setRecipesData(modified))
        yield put(setSignInLoading(false));
        yield put(setSignInSuccess(true));
    } catch (error){
        yield put(setSignInError(true));
        yield put(setSignInLoading(false));
    }
}
