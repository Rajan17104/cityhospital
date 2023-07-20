import * as ActionType from '../ActionType'

const initState = {
    doctors: [],
    loading: false,
    error: null
}

export const doctorsReducer = (state = initState , action) =>{

    console.log(action);

    switch(action.type){
        case ActionType.GET_DOCTORS: 
            return {
                ...state,
                doctors: action.payload
            }
        case ActionType.ADD_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.concat(action.payload)
            }
        case ActionType.DELETE_DOCTORS:
            return{
                ...state,
                doctors: state.doctors.filter((v) => v.id != action.payload)
            }
        default :
        return state
    }

}