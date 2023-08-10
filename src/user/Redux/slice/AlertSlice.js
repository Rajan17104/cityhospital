import { createSlice } from "@reduxjs/toolkit"


const initState = {
    text: '',
    color: ''
}


export const alertSlice = createSlice({
    name: 'alert',
    initialState: initState,
    reducers: {
        setalert: (state, action) => {
            state.text = action.payload.text;
            state.color = action.payload.color;
        },
        resetalert: (state, action) => {
            state.text = '';
            state.color = '';
        }
    }
})

export const { setalert, resetalert } = alertSlice.actions;
export default alertSlice.reducer;