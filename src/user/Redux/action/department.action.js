import { addDepartmentApiData, deleteDepartmentApiData, getDepartmentApiData, updateDepartmentApiData } from '../../../common/apis/department.api';
import * as ActionType from '../ActionType'
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

    } catch (error) {
        dispatch(errorData(error.message))
    }
}

export const addDepartmentData = (data) => (dispatch) => {
    try {

        addDepartmentApiData(data)
            .then((response) => dispatch({ type: ActionType.ADD_DEPARTMENT, payload: response.data }))
            .catch((error) => console.log(error.message))
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
            .then(dispatch({ type: ActionType.DELETE_DEPARTMENT, payload: id }))
            .catch((error) => console.log(error))

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
            .then(dispatch({ type: ActionType.UPDATE_DEPARTMENT, payload: data }))
            .catch((error) => console.log(error))

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