import { createSlice } from "@reduxjs/toolkit"


const initState = {
    items: [],
    loading: false,
    error: null
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState: initState,
    reducers: {
        addCart: (state, action) => {
            let items = state.items.some((v) => v.pid === action);
            // console.log(items);

            if (items) {
                let index = state.items.findIndex((v) => v.pid === action);
                state.items[index].qty++; 


            } else {
                state.items.push(action.payload);
            }

            state.items = state.items
        },

        incQty: (state, action) => {
            let Inc_index = state.items.findIndex((v) => v.pid === action);
            state.items[Inc_index].qty++;

            // state.items,
            //     state.loading = false,
            //     state.error = null
        },

        decQty: (state, action) => {
            let Dec_index = state.items.findIndex((v) => v.pid === action);

            // if (state.items[Dec_index].qty > 1) {
                state.items[Dec_index].qty--;
            // }

            // state.items[Dec_index].qty--

            // state.items,
            //     state.loading = false,
            //     state.error = null

            state.items = state.items

        },

        removeItem: (state ,action) => {
            state.items = state.items.filter((v) => v.pid != action)

            state.items = state.items

        }
    }
});

export const {addCart , incQty ,decQty ,removeItem} = cartSlice.actions;

export default cartSlice.reducer