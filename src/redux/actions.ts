import { action } from 'typesafe-actions';
import { TRequestFormPayload, TPost } from './types';

export const SIGN_UP_REQUEST = 'SIGN_UP';
export const SIGN_IN_REQUEST = 'SIGN_IN';
export const SIGN_UP_LOADING = 'SIGN_UP_LOADING';
export const SIGN_IN_LOADING = 'SIGN_IN_LOADING';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const CHECK_AUTH = 'CHECK_AUTH';
export const LOGOUT = 'LOG_OUT';
export const RECIPES_REQUEST = 'RECIPES_REQUEST';
export const RECIPES_LOADING = 'RECIPES_LOADING';
export const RECIPES_ERROR = 'RECIPES_ERROR';
export const RECIPES_DATA = 'RECIPES_DATA';

export const signUpRequest = (payload: TRequestFormPayload) => action(SIGN_UP_REQUEST, payload);

export const setSignUpLoading = (loading: boolean) => action(SIGN_UP_LOADING, loading);

export const setSignUpError = (error: boolean) => action(SIGN_UP_ERROR, error);

export const setSignUpSuccess = (auth: boolean) => action(SIGN_UP_SUCCESS, auth);

export const signInRequest = (payload: TRequestFormPayload) => action(SIGN_IN_REQUEST, payload);

export const setSignInLoading = (loading: boolean) => action(SIGN_IN_LOADING, loading);

export const setSignInError = (error: boolean) => action(SIGN_IN_ERROR, error);

export const setSignInSuccess = (login: boolean) => action(SIGN_IN_SUCCESS, login);

export const checkAuth = () => action(CHECK_AUTH);

export const getRecipes = () => action(RECIPES_REQUEST);

export const setRecipesLoading = (loading: boolean) => action(RECIPES_LOADING, loading);

export const setRecipesError = (error: boolean) => action(RECIPES_ERROR, error);

export const setRecipesData = (data: TPost[]) => action(RECIPES_DATA, data);

export const logOut = () => action(LOGOUT);
