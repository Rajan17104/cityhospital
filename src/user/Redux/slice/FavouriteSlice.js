import { createSlice } from "@reduxjs/toolkit"


const initState = {
    favourite: [],
    loading: false,
    error: null
}


export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: initState,
    reducers: {
        addFavourite: (state, action) => {
            let Fitem = state.favourite.concat([{ fid: action.payload }])
            console.log(Fitem);
            
        },
        removeFavourite: (state ,action) => {
            let rFitem = state.favourite.filter((v) => v.fid !== action.payload)
            console.log(rFitem);
        }

    }
})

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;