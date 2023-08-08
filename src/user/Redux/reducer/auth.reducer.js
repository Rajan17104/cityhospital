import * as ActionType from '../ActionType'

const initState = {
    user: null,
    loading: false,
    error: null
}

export const counterReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.SIGNUP_REQUEST:
            return {
                ...state
            }
        default:
            return state
    }

}