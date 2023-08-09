import { all } from "axios";
import { authsaga } from "./authSaga";



export function* rootsaga() {
    console.log("ttttt");
    yield all([
        authsaga()
    ])
}
