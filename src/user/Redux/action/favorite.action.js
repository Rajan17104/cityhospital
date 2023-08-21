import * as ActionType from '../ActionType'

export const addToFavourite = (fid) => (dispatch) => {
   dispatch({ type: ActionType.ADD_TO_FAVORITE, payload: fid })
}

export const removeToFavourite = (fid) => (dispatch) => {
   dispatch({ type: ActionType.REMOVE_TO_FAVORITE, payload: fid })
}