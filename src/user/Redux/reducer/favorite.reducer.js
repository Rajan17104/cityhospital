import * as ActionType from '../ActionType'

const initState = {
    items: [],
    loading: false,
    error: null
}

export const favoriteReducer = (state = initState, action) => {


    switch (action.type) {
        case ActionType.ADD_TO_FAVORITE:

            let item = state.items.some((v) => v.pid === action.payload.pid);

            console.log(item);

            if (item) {
            } else {
                state.items.push(action.payload);
            }

            console.log(state);
            console.log(item);


            return {
                items: state.items,
                loading: false,
                error: null
            }

        default : 

        return state
    }

}