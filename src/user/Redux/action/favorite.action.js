 import * as ActionType from '../ActionType'

 export const addToFavorite = (id) => (dispatch) => {
    dispatch({type:ActionType.ADD_TO_FAVORITE , payload:{pid: id}})
 }