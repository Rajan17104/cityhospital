import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { singupApi } from '../../../common/apis/auth.api'
import * as ActionTypes from '../ActionType'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* userSaga(action) {
  try {
    console.log('action');
    const user = yield call(singupApi,action.payload)
    console.log(user);
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e);
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
} 


function* signupSaga() {
  console.log("fffff");
  yield takeEvery(ActionTypes.SIGNUP_REQUEST, userSaga)
}

export function* authsaga() {
  console.log(
    "dsdsdsdsd"
  );
    yield all([
        signupSaga()
    ])
}

