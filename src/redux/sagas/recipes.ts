import { call, put } from 'typed-redux-saga';
import { recipes } from '../../services';
import { setRecipesLoading, setRecipesError, setRecipesData } from '../actions';

export function* userRecipes() {

    yield put(setRecipesLoading(true))
    try {
        // @ts-ignore
        const response = yield* call(recipes);
        console.log(response)
        const posts = response.data.user.posts;
        const data = posts.length ? posts.map(({ id, title, description }: any) => ({ id, title, description })) : []

        yield put(setRecipesData(data));
        yield put(setRecipesLoading(false));
    } catch (error){
        yield put(setRecipesError(true));
        yield put(setRecipesLoading(false));
    }
}
