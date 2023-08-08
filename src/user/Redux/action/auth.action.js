import * as ActionType from '../ActionType'

export const signUpRequest = (data) => (dispatch) => {
    dispatch({ type: ActionType.SIGNUP_REQUEST, payload: data })
}