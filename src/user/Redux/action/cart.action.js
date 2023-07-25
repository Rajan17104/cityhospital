import * as ActionType from '../ActionType'


export const addToCart = (id) => (dispatch) => {
    dispatch({type:ActionType.ADD_TO_CART , payload: {pid : id , qty: 1}})
}