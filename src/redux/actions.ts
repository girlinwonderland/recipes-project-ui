import { action } from 'typesafe-actions';
import { TRequestFormPayload } from './types';

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

export const signUpRequest = (payload: TRequestFormPayload) => action(SIGN_UP_REQUEST, payload);

export const setSignUpLoading = (loading: boolean) => action(SIGN_UP_LOADING, loading);

export const setSignUpError = (error: boolean) => action(SIGN_UP_ERROR, error);

export const setSignUpSuccess = (auth: boolean) => action(SIGN_UP_SUCCESS, auth);

export const signInRequest = (payload: TRequestFormPayload) => action(SIGN_IN_REQUEST, payload);

export const setSignInLoading = (loading: boolean) => action(SIGN_IN_LOADING, loading);

export const setSignInError = (error: boolean) => action(SIGN_IN_ERROR, error);

export const setSignInSuccess = (login: boolean) => action(SIGN_IN_SUCCESS, login);

export const checkAuth = () => action(CHECK_AUTH);

export const logOut = () => action(LOGOUT);
