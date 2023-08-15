import { addDepartmentApiData, deleteDepartmentApiData, getDepartmentApiData, updateDepartmentApiData } from '../../../common/apis/department.api';
import * as ActionType from '../ActionType'
import { setalert } from '../slice/AlertSlice';
import { errorData, loadingData } from './doctors.action'

export const getDepartmentData = () => (dispatch) => {
    try {
        dispatch(loadingData(true));
        setTimeout(function () {
            getDepartmentApiData()
                .then((response) => dispatch({ type: ActionType.GET_DEPARTMENT, payload: response.data }))
                .catch((error) => console.log(error))
            // fetch(" http://localhost:3004/department")
            //     .then((response) => {
            //         if (response.ok) {
            //             return response.json()
            //         }
            //         throw new Error('Something went wrong')
            //     }
            //     )
            //     .then((data) => dispatch({ type: ActionType.GET_DEPARTMENT, payload: data }))
            //     .catch((error) => dispatch(errorData(error.message)))
        }, 1000)
0

    } catch (error) {
        dispatch(errorData(error.message))
    }
}

export const addDepartmentData = (data) => (dispatch) => {
    try {

        addDepartmentApiData(data)
            .then(response => {
                dispatch(setalert({ text: 'Add Data', color: 'success' }))
                dispatch({ type: ActionType.ADD_DEPARTMENT, payload: response.data })
            })
            .catch(error => {
                dispatch(setalert({ text: 'No Add Data Please Check..', color: 'error' }))
                console.log(error.message)
            })
        // fetch(" http://localhost:3004/department", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json()
        //         }
        //         throw new Error('Something went wrong')
        //     })
        //     .then((data) => dispatch({ type: ActionType.ADD_DEPARTMENT, payload: data }))
        //     .catch((error) => dispatch(errorData(error.message)))


    } catch (error) {
        dispatch(errorData(error.message))

    }
}

export const deleteDepartment = (id) => (dispatch) => {
    try {
        deleteDepartmentApiData(id)
            .then(() => {
                dispatch(setalert({ text: 'delete Data', color: 'success' }))
                dispatch({ type: ActionType.DELETE_DEPARTMENT, payload: id })
            })
            .catch(error => {
                dispatch(setalert({ text: 'Not delete Your Data..', color: 'error' }))
                console.log(error)
            })

        // fetch(" http://localhost:3004/department/" + id, {
        //     method: "DELETE",

        // })
        //     .then(dispatch({ type: ActionType.DELETE_DEPARTMENT, payload: id }))
        //     .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updateDepartment = (data) => (dispatch) => {
    try {
        updateDepartmentApiData(data)
        .then(() => {
            dispatch(setalert({ text: 'Update Data', color: 'success' }))
            dispatch({ type: ActionType.UPDATE_DOCTORS, payload: data })
        })
        .catch(error => {
            dispatch(setalert({ text: 'Not Update your Data', color: 'error' }))
            console.log(error)
        })

        // fetch("http://localhost:3004/department/" + data.id, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json()
        //         }
        //         throw new Error('Something went wrong')
        //     }
        //     )
        //     .then((data) => dispatch({ type: ActionType.UPDATE_DEPARTMENT, payload: data }))
        //     .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}