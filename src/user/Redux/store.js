import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./reducer"
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk"
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['medicines', 'cart']

}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => {

    let store = createStore(persistedReducer, applyMiddleware(thunk))
    return store

}

export let store = configureStore()
export let persistor = persistStore(store)
