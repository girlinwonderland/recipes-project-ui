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

export const signUpRequest = (payload: TRequestFormPayload) => action(SIGN_UP_REQUEST, payload);

export const setSignUpLoading = (loading: boolean) => action(SIGN_UP_LOADING, loading);

export const setSignUpError = (error: boolean) => action(SIGN_UP_ERROR, error);

export const setSignUpSuccess = (auth: boolean) => action(SIGN_UP_SUCCESS, auth);

export const signInRequest = (payload: TRequestFormPayload) => action(SIGN_IN_REQUEST, payload);

export const signInLoading = (loading: boolean) => action(SIGN_IN_LOADING, loading);

export const signInError = (error: boolean) => action(SIGN_IN_ERROR, error);
