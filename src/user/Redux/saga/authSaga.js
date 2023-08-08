import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { singupApi } from '../../../common/apis/auth.api'
import * as ActionTypes from '../ActionType'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* userSaga(action) {
  try {
    const user = yield call(singupApi,action.payload)
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}


function* signupSaga() {
  yield takeEvery(ActionTypes.SIGNUP_REQUEST, userSaga)
}

export function* authsaga() {
    yield all([
        signupSaga()
    ])
}

