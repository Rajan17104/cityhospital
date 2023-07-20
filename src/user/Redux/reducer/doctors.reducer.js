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
        case ActionType.UPDATE_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.map((v) => {
                    if(v.id === action.payload.id){
                        return action.payload
                    }else{
                        return v;
                    }
                })
            }
        default :
        return state
    }

}