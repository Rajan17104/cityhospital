import * as ActionType from '../ActionType'

const initState = {
    item: [],
    loading: false,
    error: null
}

export const favouriteReducer = (state = initState, action) => {
console.log(action.payload);

    switch (action.type) {
        case ActionType.ADD_TO_FAVORITE:

            let item = state.item.find((v) => v.fid === action.payload.fid);

            console.log(item);
            let newD;

            if (item) {
                newD = state.item.filter((v) => v.fid !== action.payload.fid);
                state.item = newD;

            } else {
                state.item.push(action.payload);
            }

            console.log(state);
            console.log(item);


            return {
                item: state.item,
                loading: false,
                error: null
            }

        default: return state
    }

}