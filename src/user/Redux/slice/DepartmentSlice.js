import { createSlice } from "@reduxjs/toolkit"

const initState = {
    department: [],
    loading: false,
    error: null
}

export const departmentSlice = createSlice({
    name: 'Department',
    initialState: initState,
    reducers: {
        getDepartment: (state,action) => {
            state.department = action.payload

        },

        addDepartment: (state, action) => {
            state.department = state.department

        },

        deleteDepartment: (state, action) => {

            state.department.filter((v) => v.id != action.payload)


        },

        updateDepartment: (state, action) => {

            state.department.map((v) => {
                if (v.id === action.payload.id) {
                    return action.payload
                } else {
                    return v;
                }
            })

        }

    }
})

export const {getDepartment, addDepartment, deleteDepartment, updateDepartment } = departmentSlice;

export default departmentSlice.reducer