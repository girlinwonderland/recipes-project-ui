import {call, put} from 'typed-redux-saga';
import { checkauth } from '../../services';
import { setSignInLoading, setSignInSuccess, setRecipesData } from '../actions';

export function* checkAuth() {

    // yield put(setSignInLoading(true))
    try {
        // @ts-ignore
        const response = yield* call(checkauth);
        localStorage.setItem('token', response.data.accessToken)
        const modified = response.data.user.posts.map(({ _id, title, description, userId }: any) => ({
            id: _id,
            title,
            description,
            userId
        }))
        yield put(setRecipesData(modified))
        yield put(setSignInLoading(false));
        yield put(setSignInSuccess(true));
    } catch (error){
        // yield put(setSignInError(true));
        // yield put(setSignInLoading(false));
    }
}
