import * as ActionType from '../ActionType'

export const signUpRequest = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: ActionType.SIGNUP_REQUEST, payload: data })
}