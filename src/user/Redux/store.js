import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./reducer"
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk"
import storage from 'redux-persist/lib/storage'
import { rootsaga } from "./saga/rootsaga"
import createSagaMiddleware from 'redux-saga'

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['medicines', 'cart' ,'myFav']

}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()


const middlewere = [thunk, sagaMiddleware]

const configureStore = () => {

    let store = createStore(persistedReducer, applyMiddleware(...middlewere))
    sagaMiddleware.run(rootsaga)

    return store

}

export let store = configureStore()
export let persistor = persistStore(store)
