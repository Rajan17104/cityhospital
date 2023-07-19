import * as ActionTypes from '../ActionType'


export const getDoctorData = () => (dispatch) =>{
    fetch("http://localhost:3004/Doctors")
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((data) =>  dispatch({type: ActionTypes.GET_DOCTORS , payload: data}))
    .catch((error) => console.log(error))
} 