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
        default :
        return state
    }

}