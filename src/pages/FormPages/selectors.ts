import { IStateType } from '../../redux/reducers'

// type TAuthState = {
//     [AUTH]: IStateType
// }

export const successAuthStatus = (state: IStateType) => state.signUp.success;

export const loadingAuthStatus = (state: IStateType) => state.signUp.loading

export const errorAuthStatus = (state: IStateType) => state.signUp.error;
