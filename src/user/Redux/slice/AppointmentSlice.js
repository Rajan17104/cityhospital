import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

const initState = {
    apt: [],
    loading: false,
    error: null
}

export const aptAdd = createAsyncThunk(
    'appointment/add',
    async (data) => {
        console.log(data.prec.name);


        try {

            const r_no = Math.floor(Math.random() * 1000)

            const precRef = ref(storage, 'prescrtion/' + r_no + '_' + data.prec.name);

            let iData = { ...data }


            await uploadBytes(precRef, data.prec)
                .then(async (snapshot) => {
                    console.log('Uploaded a blob or file!');


                    await getDownloadURL(snapshot.ref)
                        .then(async (url) => {
                            console.log(url);

                            iData = { ...data, prec: url, presName: r_no + "_" + data.prec.name }
                            const docRef = await addDoc(collection(db, "appointment"), iData);

                            iData = {
                                id: docRef.id,
                                ...data,
                                prec: url,
                                presName: r_no + "_" + data.prec.name
                            }
                        })
                });

            return iData;

            // const docRef = await addDoc(collection(db, "appointment"), data);
            // return {
            //     id: docRef.id,
            //     ...data
            // }
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
    async (data) => {
        try {
            const desertRef = ref(storage, 'prescrtion/' + data.presName);
            console.log(data);
            await deleteObject(desertRef).then(async () => {
                await deleteDoc(doc(db, "appointment", data.id));
                console.log("file deleted success");
            })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        return data.id;
    }
)

export const updateApt = createAsyncThunk(
    'appointment/update',
    async (data) => {
        try {

            if (typeof data.prec === "string") {
                console.log('No chnage image');

                const aptRef = doc(db, "appointment", data.id);

                await updateDoc(aptRef, data);

                return data;

            } else {
                console.log('chnage image');

                // Old image delete
                // New image upload
                // New url and new data
                let iData = { ...data }
                const desertRef = ref(storage, 'prescrtion/' + data.presName);

                await deleteObject(desertRef).then(async () => {
                    
                    
                    await deleteDoc(doc(db, "appointment", data.id));
                    console.log("file deleted success");
                    
                    const r_no = Math.floor(Math.random() * 1000)
                    console.log("old image delete");
                    

                    const precRef = ref(storage, 'prescrtion/' + r_no + '_' + data.prec.name);

                    await uploadBytes(precRef, data.prec)
                        .then(async (snapshot) => {
                            console.log('Uploaded a blob or file!');


                            await getDownloadURL(snapshot.ref)
                                .then(async (url) => {
                                    console.log("New url" + url);

                                    iData = { ...data, prec: url, presName: r_no + "_" + data.prec.name }
                                    const docRef = await addDoc(collection(db, "appointment"), iData);

                                    iData = {
                                        ...data,
                                        prec: url,
                                        presName: r_no + "_" + data.prec.name
                                    }
                                })
                        });

                }).catch((error) => {
                    console.error("Error adding document: ", error);
                });
                console.log(iData);
                return iData

            }

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
                state.apt = Ddata
            })

            .addCase(updateApt.fulfilled, (state, action) => {
                state.loading = false
                let uData = state.apt.map((values) => {
                    if (values.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return values;
                    }
                })
                state.apt = uData
            })
    }
})


export default appointmentSlice.reducer