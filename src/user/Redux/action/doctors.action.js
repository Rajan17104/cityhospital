import * as ActionTypes from '../ActionType'


export const getDoctorData = () => (dispatch) => {
    try {
        fetch("http://localhost:3004/Doctors")
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.GET_DOCTORS, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
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
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.ADD_DOCTORS, payload: data }))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const deleteDoctor = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3004/Doctors/" + id, {
            method: "DELETE",
        
        })
            .then( dispatch({ type: ActionTypes.DELETE_DOCTORS, payload: id }))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}