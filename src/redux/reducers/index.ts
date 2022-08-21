
type IReducer = {
    auth: boolean,
    loading: boolean,
    error: boolean
}

type TAction = {
    type: string,
    payload?: any
}

const initialState: IReducer = {
    auth: false,
    error: false,
    loading: false
}

export const reducer = (state = initialState, action: TAction): IReducer => {
    return state;
}
