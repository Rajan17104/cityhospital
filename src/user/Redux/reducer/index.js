import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { doctorsReducer } from "./doctors.reducer";
import { medicinereducer } from "./medicine.reducer";


export const rootReducer = combineReducers({
    counter : counterReducer,
    doctors : doctorsReducer,
    medicine : medicinereducer
})