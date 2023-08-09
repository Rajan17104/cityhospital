import * as ActionType from '../user/Redux/ActionType'
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { signupAPI } from '../common/apis/auth.api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    console.log(action);
  try {
    const user = yield call(signupAPI, action.payload)
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e);
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* signupSaga() {
  yield takeEvery(ActionType.SIGNUP_REQUEST, signupUser)
}

export function* authsaga () {
    yield all([
        signupSaga()
    ])
}

// export default mySaga