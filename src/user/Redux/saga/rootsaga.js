import { all } from "axios";
import { authsaga } from "./authSaga";



export function* rootsaga() {
    yield all([
        authsaga()
    ])
}
