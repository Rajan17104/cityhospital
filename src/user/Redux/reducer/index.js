import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { doctorsReducer } from "./doctors.reducer";
import { medicinereducer } from "./medicine.reducer";
import { cartReducer } from "./cart.reducer";


export const rootReducer = combineReducers({
    counter : counterReducer,
    doctors : doctorsReducer,
    medicines : medicinereducer,
    cart : cartReducer
})