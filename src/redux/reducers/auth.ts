import { ActionType } from 'typesafe-actions';
import * as Actions from '../actions';

export type TAction = ActionType<typeof Actions>;

export type IAuthStateType = {
    error: boolean,
    loading: boolean,
    success: boolean
}

const initialState: IAuthStateType = {
    error: false,
    loading: false,
    success: false
};

export const authReducer = (state = initialState, action: TAction) => {
    switch (action.type){
        case Actions.SIGN_UP_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case Actions.SIGN_UP_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case Actions.SIGN_UP_SUCCESS: {
            return {
                ...state,
                success: action.payload
            }
        }
        default:
            return state;
    }
}
