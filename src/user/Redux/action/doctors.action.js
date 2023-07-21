import * as ActionTypes from '../ActionType'


export const getDoctorData = () => (dispatch) => {
    try {
        dispatch(loadingData(true));
        setTimeout(function () {
            fetch("http://localhost:3004/Doctor")
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error('Something went wrong')
                }
                )
                .then((data) => dispatch({ type: ActionTypes.GET_DOCTORS, payload: data }))
                .catch((error) => dispatch(errorData(error.message)))
        }, 3000)

    } catch (error) {
        dispatch(errorData(error.message))
    }
}

export const addDoctorData = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/Doctors", {
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
            .then((data) => dispatch({ type: ActionTypes.ADD_DOCTORS, payload: data }))
            .catch((error) => dispatch(errorData(error.message)))

    } catch (error) {
        dispatch(errorData(error.message))

    }
}

export const deleteDoctor = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3004/Doctors/" + id, {
            method: "DELETE",

        })
            .then(dispatch({ type: ActionTypes.DELETE_DOCTORS, payload: id }))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const updateDoctor = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/Doctors/" + data.id, {
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
            }
            )
            .then((data) => dispatch({ type: ActionTypes.UPDATE_DOCTORS, payload: data }))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const loadingData = (status) => (dispatch) => {
    console.log("Loading");
    dispatch({ type: ActionTypes.LOADING_DOCTORS, payload: status })
}

export const errorData = (errorMsg) => (dispatch) => {
    console.log(errorMsg);
    dispatch({ type: ActionTypes.ERROR_DOCTORS, payload: errorMsg })
}