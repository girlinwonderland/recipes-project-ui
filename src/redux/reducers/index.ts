import { Draft } from 'immer';
import { SIGN_UP_LOADING, SIGN_IN_LOADING, SIGN_IN_ERROR, SIGN_UP_ERROR, SIGN_UP_SUCCESS } from '../actions';

type Payload<T> = {
    type: string,
    payload: T
}

type ImmutableReducer<D, T = undefined> = (draft: Draft<D>, payload: Payload<T>) => void | D

export interface IStateType {
    signUp: {
        error: boolean,
        loading: boolean,
        success: boolean
    },
    signIn: {
        error: boolean,
        loading: boolean
    }
}

export type DataInStateType = {
    [key: string]: any
}

export interface ILoadingAction {
    loading: boolean
}
export interface IErrorAction {
    error: boolean
}

export interface IAuthAction {
    auth: boolean
}

type IAuthReducer = {
    [SIGN_UP_LOADING]: ImmutableReducer<IStateType, ILoadingAction>,
    [SIGN_IN_LOADING]: ImmutableReducer<IStateType, ILoadingAction>,
    [SIGN_UP_ERROR]: ImmutableReducer<IStateType, IErrorAction>,
    [SIGN_IN_ERROR]: ImmutableReducer<IStateType, IErrorAction>,
    [SIGN_UP_SUCCESS]: ImmutableReducer<IStateType, IAuthAction>,
}

type TAction = {
    type: string,
    payload?: any
}

const initialState: IStateType = {
    signUp: {
        error: false,
        loading: false,
        success: false
    },
    signIn: {
        error: false,
        loading: false
    }
}

export const reducer = (state = initialState, action: TAction) => {
    switch (action.type){
        case SIGN_UP_LOADING:
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    loading: action.payload
                }
            }
        case SIGN_UP_ERROR: {
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    error: action.payload
                }
            }
        }
        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    success: action.payload
                }
            }
        }
        default:
            return state
    }
}


// export const reducer = (state = initialState, action: TAction) => {
//     [SIGN_UP_LOADING]: (draft, { payload: { loading } }) => {
//         draft.signUp.loading = loading;
//     },
//         [SIGN_UP_ERROR]: (draft, { payload: { error } }) => {
//         draft.signUp.error = error;
//     },
//         [SIGN_UP_SUCCESS]: (draft, { payload: { auth } }) => {
//         draft.signUp.success = auth;
//     },
//         [SIGN_IN_LOADING]: (draft, { payload: { loading } }) => {
//         draft.signIn.loading = loading;
//     },
//         [SIGN_IN_ERROR]: (draft, { payload: { error } }) => {
//         draft.signIn.error = error;
//     },
// }
