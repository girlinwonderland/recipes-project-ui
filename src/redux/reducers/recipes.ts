import { ActionType } from 'typesafe-actions';
import produce from 'immer';
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
        case Actions.FILTER_RECIPES: {
            return {
                ...state,
                recipes: state.recipes.filter(item => item.id !== action.payload)
            }
        }
        case Actions.RECIPES_DATA_FAV: {
            return produce(state, (draft) => {
                const index: number = draft.recipes.findIndex((item) => action.payload.id === item.id);
                const element = draft.recipes.find((item) => action.payload.id === item.id);
                if (element){
                    draft.recipes[index] = {
                        ...element,
                        favourite: action.payload.like
                    }
                }
            })
        }
        default:
            return state;
    }
}
