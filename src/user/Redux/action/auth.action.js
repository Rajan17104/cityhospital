import * as ActionType from '../ActionType'

export const signupRequest = (data) => (dispatch) => {
    dispatch({ type: ActionType.SIGNUP_REQUEST, payload: data })
}

export const emailVerified = () => (dispatch) => {
    dispatch({ type: ActionType.EMAIL_VERIFICATION })
}

export const authError = (data) => (dispatch) => {
    dispatch({ type: ActionType.AUTH_ERROR, payload: data })
}

export const loginRequest = (data) => (dispatch) => {
    dispatch({ type: ActionType.LOGIN_REQUEST, payload: data })
}

export const forgetRequest = (data) => (dispatch) => {
    dispatch({ type: ActionType.FORGET_REQUSET, payload: data })
}

export const logoutRequest = () => (dispatch) => {
    dispatch({ type: ActionType.LOGOUT_REQUEST })
}

export const logout = () => (dispatch) => {
    dispatch({ type: ActionType.LOGOUT })
}
