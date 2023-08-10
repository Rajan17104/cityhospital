import * as ActionType from '../ActionType'

const initState = {
    user: null,
    loading: false,
    error: null

}

export const authReducer = (state = initState, action) => {
    console.log(action);

    switch (action.type) {
        case ActionType.SIGNUP_REQUEST:
            return {
                ...state
            }
        // case ActionType.LOGIN_REQUEST:
        //     return {
        //         ...state
        //     }
        // case ActionType.FORGET_REQUSET:
        //     return {
        //         ...state
        //     }
        default:
            return state
    }

}