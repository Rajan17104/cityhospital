import * as ActionType from '../ActionType'

const initState = {
    favItmes: [],
    loading: false,
    error: null
}

export const favoriteReducer = (state = initState, action) => {
    // console.log(action);
    console.log(state.favItmes)


    switch (action.type) {
        case ActionType.ADD_TO_FAVORITE:

            return {
                ...state,
                favItmes: state.favItmes.concat([{ fid: action.payload }])
            }
        case ActionType.REMOVE_TO_FAVORITE:

            return {
                ...state,
                favItmes: state.favItmes.filter((items) => items.fid !== action.payload)
            }

        default:

            return state
    }

}