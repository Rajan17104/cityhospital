import { combineReducers } from "redux";
// import { counterReducer } from "./counter.reducer";
import { doctorsReducer } from "./doctors.reducer";
import { medicinereducer } from "./medicine.reducer";
// import { cartReducer } from "./cart.reducer";
import { favoriteReducer } from "./favorite.reducer";
import counterReducer from "../slice/CounterSlice";
import cartReducer from "../slice/CartSlice";



export const rootReducer = combineReducers({
    counter : counterReducer,
    doctors : doctorsReducer,
    medicines : medicinereducer,
    cart : cartReducer,
    favorite : favoriteReducer
})