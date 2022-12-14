import { ActionType } from 'typesafe-actions';
import * as Actions from '../actions';

export type TAction = ActionType<typeof Actions>;

export type ILoginStateType = {
    error: boolean,
    loading: boolean,
    success: boolean
}

const initialState: ILoginStateType = {
    error: false,
    loading: false,
    success: false
};

export const loginReducer = (state = initialState, action: TAction) => {
    switch (action.type){
        case Actions.SIGN_IN_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case Actions.SIGN_IN_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case Actions.SIGN_IN_SUCCESS: {
            return {
                ...state,
                success: action.payload
            }
        }
        default:
            return state;
    }
}
