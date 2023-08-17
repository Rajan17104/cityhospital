import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
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

export const getApt = createAsyncThunk(
    'appointment/get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "appointment"));

            let data = [];

            querySnapshot.forEach((doc) => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            return data;

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

export const deleteApt = createAsyncThunk(
    'appointment/delete',
    async (id) => {
        console.log(id);
        try {
            await deleteDoc(doc(db, "appointment", id));
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

const pending = (state, action) => {
    state.loading = true;
    state.error = null;
}

const rejected = (state, action) => {
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
                state.apt = state.apt.concat(action.payload);
            })

            // .addCase(getApt.pending, pending)
            .addCase(getApt.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action);
                state.apt = action.payload;
            })

            .addCase(deleteApt.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action);
                let Ddata = state.apt.filter((v) => v.id !== action.payload);
                Ddata = state.apt   
            })
    }
})


export default appointmentSlice.reducer