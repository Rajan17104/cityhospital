import { combineReducers } from "redux";
// import { counterReducer } from "./counter.reducer";
import { doctorsReducer } from "./doctors.reducer";
import { medicinereducer } from "./medicine.reducer";
// import { cartReducer } from "./cart.reducer";
// import { favoriteReducer } from "./favorite.reducer";
import counterReducer from "../slice/CounterSlice";
import cartReducer from "../slice/CartSlice";
import departmentReducer from "../slice/DepartmentSlice";
import alertReducer from "../slice/AlertSlice";
import { authReducer } from "./auth.reducer";
import appointmentReducer from "../slice/AppointmentSlice";
import favouriteReducer  from "..//slice/FavouriteSlice";

// import { departmentReducer } from "./department.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    counter: counterReducer,
    doctors: doctorsReducer,
    medicines: medicinereducer,
    department: departmentReducer,
    cart: cartReducer,
    appointment: appointmentReducer,
    favourite: favouriteReducer
})

