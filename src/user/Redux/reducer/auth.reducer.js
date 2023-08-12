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
        case ActionType.LOGIN_REQUEST:
        case ActionType.FORGET_REQUSET:
        case ActionType.LOGOUT_REQUEST:
            return {
                user: null,
                loading: true,
                error: null
            }
        case ActionType.EMAIL_VERIFICATION:
            return {
                user: null,
                loading: false,
                error: null
            }
        case ActionType.AUTH_ERROR:
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        case ActionType.LOGIN_IN:
            return {
                user: action.payload,
                loading: false,
                error: null
            }
        case ActionType.LOGOUT:
            return {
                user: null,
                loading: false,
                error: null
            }


        default:
            return state
    }

}