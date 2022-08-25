import { IRootReducer } from '../../redux/reducers';

export const successAuthStatus = (state: IRootReducer) => state.auth.success;

export const loadingAuthStatus = (state: IRootReducer) => state.auth.loading

export const errorAuthStatus = (state: IRootReducer) => state.auth.error;
