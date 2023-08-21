import * as ActionType from '../ActionType'

const initState = {
    medicines: [],
    loading: false,
    error: null
}

export const medicinereducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LOADING_MEDICINE:
            return {
                medicines: [],
                loading: true,
                error: null
            }
        case ActionType.ERROR_MEDICINE:
            return {
                medicines: [],
                loading: false,
                error: action.payload
            }
        case ActionType.GET_MEDICINE:
            return {
                ...state,
                medicines: action.payload,
                loading: false
            }
        case ActionType.ADD_MEDICINE:
            return {
                ...state,
                medicines: state.medicines.concat(action.payload)
            }
        case ActionType.DELETE_MEDICINE:
            return {
                ...state,
                medicines: state.medicines.filter((v) => v.id !== action.payload)
            }
        case ActionType.UPDATE_MEDICINE:
            return {
                ...state,
                medicines: state.medicines.map((v) => {
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