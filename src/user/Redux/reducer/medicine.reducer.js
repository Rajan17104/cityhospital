import * as ActionType from '../ActionType'

const initState = {
    medicine: [],
    loading: false,
    error: null
}

export const medicinereducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LOADING_DOCTORS:
            return {
                medicine: [],
                loading: true,
            }
        case ActionType.ERROR_DOCTORS:
            return {
                medicine: [],
                loading: false,
                error: action.payload
            }
        case ActionType.GET_MEDICINE:
            return {
                medicine: [],
                loading: false,
            }
        case ActionType.ADD_MEDICINE:
            return {
                ...state,
                medicine: state.medicine.concat(action.payload)
            }
        case ActionType.DELETE_MEDICINE:
            return {
                ...state,
                medicine: state.medicine.filter((v) => v.id != action.payload)
            }
        case ActionType.UPDATE_MEDICINE:
            return {
                ...state,
                medicine: state.medicine.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v;
                    }
                })
            }
        default:
            return state
    }
}