import * as ActionType from '../ActionType'

export const signupRequest = (data) => (dispatch) => {
    dispatch({type: ActionType.SIGNUP_REQUEST , payload: data})
} 

export const loginRequest = (data) => (dispatch) => {
    dispatch({type: ActionType.LOGIN_REQUEST , payload: data})
} 

export const forgetRequest = (data) => (dispatch) => {
    dispatch({type: ActionType.FORGET_REQUSET , payload: data})
} 
