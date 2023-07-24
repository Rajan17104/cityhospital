import * as ActionType from "../ActionType"

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
        }, 3000)

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
            .then((data) => dispatch({ type: ActionType.ADD_MEDICINE, payload: data }))
            .catch((error) => dispatch(errorData(error.message)))

    } catch (error) {
        dispatch(errorData(error.message))

    }
}

export const deleteMedicine = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines/" + id, {
            method: "DELETE",

        })
            .then(dispatch({ type: ActionType.DELETE_MEDICINE, payload: id }))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const updateMedicine= (data) => (dispatch) => {
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
            }
            )
            .then((data) => dispatch({ type: ActionType.UPDATE_MEDICINE, payload: data }))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const loadingData = (status) => (dispatch) => {
    console.log("Loading");
    dispatch({ type: ActionType.LOADING_MEDICINE, payload: status })
}

export const errorData = (errorMsg) => (dispatch) => {
    console.log(errorMsg);
    dispatch({ type: ActionType.ERROR_MEDICINE, payload: errorMsg })
}