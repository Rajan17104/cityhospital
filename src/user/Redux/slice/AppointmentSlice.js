import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

const initState = {
    apt: [],
    loading: false,
    error: null
}

export const aptAdd = createAsyncThunk(
    'appointment/add',
    async (data) => {
        try {
            const docRef = await addDoc(collection(db, "appointment"), data);
            return {
                id: docRef.id,
                ...data
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

const pending = (state,action) => {
    state.loading = true;
    state.error = null;
}

const rejected = (state,action) => {
    state.loading = false;
    state.error = action.error.message;
}


export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(aptAdd.pending, pending)
            .addCase(aptAdd.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action);
                state.apt = action.payload;
            })
    }
})


export default appointmentSlice.reducer