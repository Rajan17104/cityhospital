import * as ActionType from "../ActionType"
import { setalert } from "../slice/AlertSlice";

export const getMedicine = () => (dispatch) => {
    try {
        dispatch(loadingData(true));
        setTimeout(function () {
            fetch("http://localhost:3004/medicines")
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error('Something went wrong')
                }
                )
                .then((data) => dispatch({ type: ActionType.GET_MEDICINE, payload: data }))
                .catch((error) => dispatch(errorData(error.message)))
        }, 1000)

    } catch (error) {
        dispatch(errorData(error.message))
    }
}


export const Addmedicine = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Something went wrong')
            }
            )
            .then(data => {
                dispatch(setalert({ text: 'Add Data', color: 'success' }))
                dispatch({ type: ActionType.ADD_MEDICINE, payload: data })
            })
            .catch((error) => dispatch(errorData(error.message)))

    } catch (error) {
        dispatch(setalert({ text: 'No Add Data Please Check..', color: 'error' }))
        dispatch(errorData(error.message))

    }
}

export const deleteMedicine = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines/" + id, {
            method: "DELETE",

        })
            .then(() => {
                dispatch(setalert({ text: 'delete Data', color: 'success' }))
                dispatch({ type: ActionType.DELETE_MEDICINE, payload: id })
            })
            .catch(error => {
                dispatch(setalert({ text: 'Not delete Your Data..', color: 'error' }))
                dispatch(errorData(error.message))
            })

    } catch (error) {
        console.log(error);
    }
}

export const updateMedicine = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Something went wrong')
            })
            .then((data) => {
                dispatch(setalert({ text: 'Update Data', color: 'success' }))
                dispatch({ type: ActionType.UPDATE_MEDICINE, payload: data })
            })
            .catch(error => {
                dispatch(setalert({ text: 'Not Update your Data', color: 'error' }))
                dispatch(errorData(error))
            })

    } catch (error) {
        console.log(error);
    }
}

export const loadingData = (status) => (dispatch) => {
    console.log("Loading");
    dispatch({ type: ActionType.LOADING_MEDICINE, payload: status })
}

export const errorData = (errorMsg) => (dispatch) => {
    console.log(errorData);
    dispatch({ type: ActionType.ERROR_MEDICINE, payload: errorMsg })
}