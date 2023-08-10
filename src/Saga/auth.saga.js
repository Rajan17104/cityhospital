import * as ActionType from '../user/Redux/ActionType'
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { forgetAPI, loginAPI, signupAPI } from '../common/apis/auth.api';
import { setalert } from '../user/Redux/slice/AlertSlice';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
  console.log(action);
  try {
    const user = yield call(signupAPI, action.payload)
    yield put(setalert({ text: user.message, color: 'success' }))
  } catch (e) {
    yield put(setalert({ text: e.message, color: 'error' }))
    console.log(e);
  }
}

function* loginUser(action) {
  console.log(action);
  try {
    const user = yield call(loginAPI, action.payload)
    yield put(setalert({ text: user.message, color: 'success' }))
  } catch (e) {
    yield put(setalert({ text: e.message, color: 'error' }))
    console.log(e);
  }
}

function* forgetUser(action) {
  console.log(action);
  try {
    const user = yield call(forgetAPI, action.payload)
    yield put(setalert({ text: user.message, color: 'success' }))
  } catch (e) {
    yield put(setalert({ text: e.message, color: 'error' }))
    console.log(e);
  }
}


function* signupSaga() {
  yield takeEvery(ActionType.SIGNUP_REQUEST, signupUser)
}

function* loginSaga() {
  yield takeEvery(ActionType.LOGIN_REQUEST, loginUser)
}

function* forgetSaga() {
  yield takeEvery(ActionType.FORGET_REQUSET, forgetUser)
}

export function* authsaga() {
  yield all([
    signupSaga(),
    loginSaga(),
    forgetSaga()
  ])
}

// export default mySaga