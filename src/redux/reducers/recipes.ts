import { ActionType } from 'typesafe-actions';
import * as Actions from '../actions';
import { TPost } from '../types';

export type TAction = ActionType<typeof Actions>;

export type IRecipesStateType = {
    error: boolean,
    loading: boolean,
    recipes: TPost[]
};

const initialState: IRecipesStateType = {
    error: false,
    loading: false,
    recipes: []
};

export const recipesReducer = (state = initialState, action: TAction) => {
    switch (action.type){
        case Actions.RECIPES_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case Actions.RECIPES_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case Actions.RECIPES_DATA: {
            return {
                ...state,
                recipes: action.payload
            }
        }
        default:
            return state;
    }
}
