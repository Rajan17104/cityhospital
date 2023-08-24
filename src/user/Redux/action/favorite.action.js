 import * as ActionType from '../ActionType'

 export const addToFavourite = (id) => (dispatch) => {
    dispatch({type:ActionType.ADD_TO_FAVORITE , payload:{pid: id}})
 }

 export const removeToFavourite = (id) => (dispatch) => {
   dispatch({type:ActionType.REMOVE_TO_FAVORITE , payload: id})
}