import { onEditRecipes, onToggleFavourite } from '../actions';
import { call, put } from 'typed-redux-saga';
import { editRecipe } from '../../services';

export function* editRecipes({ payload }: ReturnType<typeof onEditRecipes>) {
    try {
        // @ts-ignore
        const response = yield* call(editRecipe, payload);
        if (response){
            yield put(onToggleFavourite(payload.id, payload.favourite))
        }
    } catch (error){

    }
}
