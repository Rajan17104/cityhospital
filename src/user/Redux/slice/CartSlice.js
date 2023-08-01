import { createSlice } from "@reduxjs/toolkit"


const initState = {
    items: [],
    loading: false,
    error: null
}


export const cartSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        addCart: (state, action) => {
            let item = state.items.some((v) => v.pid === action);
            console.log(item);

            if (item) {
                let index = state.items.findIndex((v) => v.pid === action);
                state.items[index].qty++; 


            } else {
                state.items.push(action);
            }

            state.items = state.items
        },

        incQty: (state, action) => {
            let Inc_index = state.items.findIndex((v) => v.pid === action);
            state.items[Inc_index].qty++

            // state.items,
            //     state.loading = false,
            //     state.error = null
        },

        decQty: (state, action) => {
            let Dec_index = state.items.findIndex((v) => v.pid === action);
            state.items[Dec_index].qty--

            // state.items,
            //     state.loading = false,
            //     state.error = null

        },

        removeItem: (state ,action) => {
            state.items = state.items.filter((v) => v.pid != action)

        }
    }
});

export const {addCart , incQty ,decQty ,removeItem} = cartSlice;

export default cartSlice.reducer