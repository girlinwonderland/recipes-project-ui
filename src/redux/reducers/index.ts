import { combineReducers } from 'redux';
import { authReducer, IAuthStateType } from './auth';
import { loginReducer, ILoginStateType } from './login';
import { recipesReducer, IRecipesStateType } from './recipes';

export type IRootReducer = {
    login: ILoginStateType,
    auth: IAuthStateType,
    recipes: IRecipesStateType
}

export const rootReducer = combineReducers<IRootReducer>({
    login: loginReducer,
    auth: authReducer,
    recipes: recipesReducer
});
