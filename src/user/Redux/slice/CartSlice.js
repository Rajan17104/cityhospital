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
            let item = state.items.some((v) => v.pid === action.payload.pid);
            console.log(item);

            if (item) {
                let index = state.items.findIndex((v) => v.pid === action.payload.pid);
                state.items[index].qty++; 


            } else {
                state.items.push(action.payload);
            }

            state.items = state.items
        },

        incQty: (state, action) => {
            let Inc_index = state.items.findIndex((v) => v.pid === action.payload);
            state.items[Inc_index].qty++

            // state.items,
            //     state.loading = false,
            //     state.error = null
        },

        decQty: (state, action) => {
            let Dec_index = state.items.findIndex((v) => v.pid === action.payload);
            state.items[Dec_index].qty--

            // state.items,
            //     state.loading = false,
            //     state.error = null

        },

        removeItem: (state ,action) => {
            state.items = state.items.filter((v) => v.pid != action.payload)
            state.items = state.items   
        }
    }
});

export const {addCart , incQty ,decQty ,removeItem} = cartSlice.actions;

export default cartSlice.reducer;