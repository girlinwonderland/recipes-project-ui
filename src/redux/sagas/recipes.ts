import { call, put } from 'typed-redux-saga';
import { recipes } from '../../services';
import { setRecipesLoading, setRecipesError, setRecipesData } from '../actions';

export function* userRecipes() {

    yield put(setRecipesLoading(true))
    try {
        // @ts-ignore
        const response = yield* call(recipes);
        const posts = response.data.user.posts;
        console.log(posts)
        const data = posts.length ? posts.map(({ id, title, description, favourite }: any) =>
            ({ id, title, description, favourite })) : []

        yield put(setRecipesData(data));
        yield put(setRecipesLoading(false));
    } catch (error){
        yield put(setRecipesError(true));
        yield put(setRecipesLoading(false));
    }
}
