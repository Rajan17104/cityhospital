import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDepartmentApiData, deleteDepartmentApiData, getDepartmentApiData, updateDepartmentApiData } from "../../../common/apis/department.api"

const initState = {
    department: [],
    isloading: false,
    error: null
}


export const fetchDepartment = createAsyncThunk(
    'department/fetch',
    async () => {
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
    }
)

export const deleteDepartment = createAsyncThunk(
    'department/delete',
    async (id) => {
        let response = await deleteDepartmentApiData(id);
        return response.id  
    }
)

export const updateDepartment = createAsyncThunk(
    'department/update',
    async (data) => {
        let response = await updateDepartmentApiData(data);
        return response.data
    }
)

export const departmentSlice = createSlice({
    name: 'department',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartment.fulfilled, (state, action) => {
                console.log(action);
                state.department = action.payload
            })
            .addCase(fetchDepartment.pending, (state, action) => {
                // state.department = action.payload

            })

            .addCase(addDepartment.fulfilled, (state, action) => {
                state.department = state.department.concat(action.payload)
            })

            .addCase(deleteDepartment.fulfilled, (state,action) => {
                 state.department=  state.department.filter((v) => v.id != action.payload)
            }) 

            .addCase(updateDepartment.fulfilled, (state,action) => {

                state.department= state.department.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v;
                    }
                })
           }) 
            
    }
})



export default departmentSlice.reducer