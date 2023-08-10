import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDepartmentApiData, deleteDepartmentApiData, getDepartmentApiData, updateDepartmentApiData } from "../../../common/apis/department.api"
import { setalert } from "./AlertSlice";
import { useDispatch } from "react-redux";

const initState = {
    department: [],
    isloading: false,
    error: null
}

// const dispatch = useDispatch([]);


export const fetchDepartment = createAsyncThunk(
    'department/fetch',
    async () => {

        await new Promise((resolve, reject) => setTimeout(resolve, 2000));

        let response = await getDepartmentApiData();
        console.log(response);
        return response.data
    }
)

export const addDepartment = createAsyncThunk(
    'department/add',
    async (data) => {
        let response = await addDepartmentApiData(data);
        console.log(response);

        return response.data
    },
    

)

export const deleteDepartment = createAsyncThunk(
    'department/delete',
    async (id) => {
        await deleteDepartmentApiData(id);

        return id
    }
)

export const updateDepartment = createAsyncThunk(
    'department/update',
    async (data) => {
        let response = await updateDepartmentApiData(data);
        return response.data
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