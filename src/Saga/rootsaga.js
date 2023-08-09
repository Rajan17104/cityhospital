import { all } from "redux-saga/effects";
import { authsaga } from "./auth.saga";


export function* rootsaga() {
    yield all([
        authsaga()
    ])
}