import { TOGGLE_THEME } from "../ActionType";


export const themeReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                theme: action.payload
            }

        default: 
         return state

    }
}