import * as ActionType from '../ActionType'


export const addToCart = (id) => (dispatch) => {
    dispatch({type:ActionType.ADD_TO_CART , payload: {pid : id , qty: 1}})
}

export const IncCartQty = (id) => (dispatch) => {
    dispatch({type: ActionType.INC_QTY , payload: id})
}