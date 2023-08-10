import * as ActionType from '../ActionType'

const initState = {
    items: [],
    loading: false,
    error: null
}

export const cartReducer = (state = initState, action) => {
    console.log(action);

    switch (action.type) {
        case ActionType.ADD_TO_CART:

            let item = state.items.some((v) => v.pid === action.payload.pid);

            console.log(item);

            if (item) {
                let index = state.items.findIndex((v) => v.pid === action.payload.pid);
                state.items[index].qty++;


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

        case ActionType.INC_QTY:

            console.log(state.items + action.payload);

            let Inc_index = state.items.findIndex((v) => v.pid === action.payload);
            state.items[Inc_index].qty++

            return {
                items: state.items,
                loading: false,
                error: null
            }

        case ActionType.DEC_QTY:

            console.log(state.items + action.payload);

            let Dec_index = state.items.findIndex((v) => v.pid === action.payload);
            state.items[Dec_index].qty--

            return {
                items: state.items,
                loading: false,
                error: null
            }

        case ActionType.REMOVE_ITEM:
            return{
                items: state.items.filter((v) => v.pid != action.payload)
            }

        default:
            return state;
    }

}