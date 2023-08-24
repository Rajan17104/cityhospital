 import * as ActionType from '../ActionType'

 export const addOnfavApi = (id) => (dispatch) => {
    dispatch({type:ActionType.ADD_TO_FAVORITE , payload:{pid: id}})
 }

 export const removeOnfavApi = (id) => (dispatch) => {
   dispatch({type:ActionType.REMOVE_TO_FAVORITE , payload:{pid: id}})
}