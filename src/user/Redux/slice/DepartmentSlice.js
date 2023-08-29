import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDepartmentApiData, deleteDepartmentApiData, getDepartmentApiData, updateDepartmentApiData } from "../../../common/apis/department.api"
import { setalert } from "./AlertSlice";
import { useDispatch } from "react-redux";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { db, storage } from "../../../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "@firebase/firestore";

const initState = {
    department: [],
    isloading: false,
    error: null
}

// const dispatch = useDispatch([]);


export const fetchDepartment = createAsyncThunk(
    'department/fetch',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "department"));

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

export const addDepartment = createAsyncThunk(
    'department/add',
    // async (data) => {
    //     let response = await addDepartmentApiData(data);
    //     console.log(response);

    //     return response.data
    // },

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
                            const docRef = await addDoc(collection(db, "department"), iData);

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

export const deleteDepartment = createAsyncThunk(
    'department/delete',
    // async (id) => {
    //     await deleteDepartmentApiData(id);

    //     return id
    // }

    async (data) => {
        try {
            const desertRef = ref(storage, 'prescrtion/' + data.presName);
            console.log(data);
            await deleteObject(desertRef)
                .then(async () => {
                    await deleteDoc(doc(db, "department", data.id));
                    console.log("file deleted success");
                })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        return data.id;
    }
)

export const updateDepartment = createAsyncThunk(
    'department/update',
    // async (data) => {
    //     let response = await updateDepartmentApiData(data);
    //     return response.data
    // }
    async (data) => {
        try {

            if (typeof data.prec === "string") {
                console.log('No chnage image');

                const aptRef = doc(db, "department", data.id);

                await updateDoc(aptRef, data);

                return data;

            } else {
                console.log('chnage image');

                // Old image delete
                // New image upload
                // New url and new data
                let iData = { data }
                const desertRef = ref(storage, 'prescrtion/' + data.presName);

                await deleteObject(desertRef)

                    .then(async () => {
                        await deleteDoc(doc(db, "department", data.id));
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
                                        const docRef = await addDoc(collection(db, "department"), iData);

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

const Loading = (state, action) => {
    state.isloading = true;
    state.error = null;
}

const reject = (state, action) => {
    state.isloading = false;
    state.error = action.error.message;
}

export const departmentSlice = createSlice({
    name: 'department',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            /***get data***/
            .addCase(fetchDepartment.pending, Loading)
            .addCase(fetchDepartment.fulfilled, (state, action) => {
                console.log(action);
                state.isloading = false
                state.department = action.payload
            })
            .addCase(fetchDepartment.rejected, reject)

            /***Add data***/
            .addCase(addDepartment.pending, Loading)
            .addCase(addDepartment.fulfilled, (state, action) => {
                state.isloading = false
                state.department = state.department.concat(action.payload)
            })
            .addCase(addDepartment.rejected, reject)

            /***Delete data***/
            .addCase(deleteDepartment.pending, Loading)
            .addCase(deleteDepartment.fulfilled, (state, action) => {
                state.isloading = false
                state.department = state.department.filter((v) => v.id != action.payload)
            })
            .addCase(deleteDepartment.rejected, reject)

            /***Update data***/
            .addCase(updateDepartment.pending, Loading)
            .addCase(updateDepartment.fulfilled, (state, action) => {
                state.isloading = false
                state.department = state.department.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v;
                    }
                })
            })
            .addCase(updateDepartment.rejected, reject)


    }
})



export default departmentSlice.reducer