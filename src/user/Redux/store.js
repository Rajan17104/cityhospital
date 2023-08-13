import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./reducer"
import { persistReducer, persistStore } from 'redux-persist'
import thunk from "redux-thunk"
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { rootsaga } from "../../Saga/rootsaga"

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['medicines','auth' ] 
    
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middleweres = [thunk, sagaMiddleware]

export const configureStore = () => {

    let store = createStore(persistedReducer, applyMiddleware(...middleweres))

    sagaMiddleware.run(rootsaga)

    return store;

}

export let store = configureStore();
export let persistor = persistStore(store)