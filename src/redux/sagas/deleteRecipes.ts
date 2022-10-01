import { call, put } from 'typed-redux-saga';
import { deleteRecipe } from '../../services';
import { onDeleteRecipe, onFilterRecipes } from '../actions';

export function* deleteRecipes({ payload }: ReturnType<typeof onDeleteRecipe>) {
    try {
        // @ts-ignore
        const response = yield* call(deleteRecipe, payload);
        if (response){
            yield put(onFilterRecipes(payload))
        }
    } catch (error){

    }
}
