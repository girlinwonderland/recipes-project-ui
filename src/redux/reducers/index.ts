import { combineReducers } from 'redux';
import {authReducer, IAuthStateType } from './auth';
import { loginReducer, ILoginStateType } from './login';

export type IRootReducer = {
    login: ILoginStateType,
    auth: IAuthStateType
}

export const rootReducer = combineReducers<IRootReducer>({
    login: loginReducer,
    auth: authReducer,
});
