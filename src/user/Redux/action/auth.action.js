import * as ActionType from '../ActionType'

export const signupRequest = (data) => (dispatch) => {
    dispatch({type: ActionType.SIGNUP_REQUEST , payload: data})
} 