import * as ActionType from '../user/Redux/ActionType'
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { forgetAPI, loginAPI, logoutAPI, signupAPI } from '../common/apis/auth.api';
import { setalert } from '../user/Redux/slice/AlertSlice';
import { authError, emailVerified, loginRequest } from '../user/Redux/action/auth.action';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
  console.log(action);
  try {
    const user = yield call(signupAPI, action.payload)
    yield put(emailVerified())
    yield put(setalert({ text: user.message, color: 'success' }))

  } catch (e) {
    yield put(authError(e.message))
    yield put(setalert({ text: e.message, color: 'error' }))
    console.log(e);
  }
}

function* loginUser(action) {
  console.log(action);
  try {
    const user = yield call(loginAPI, action.payload)
    yield put(emailVerified())
    yield put(setalert({ text: user.message, color: 'success' }))
  } catch (e) {
    yield put(authError(e.message))
    yield put(setalert({ text: e.message, color: 'error' }))
    console.log(e);
  }
}

function* logoutuser(action) {
  console.log(action);
  try {
    const user = yield call(logoutAPI, action.payload)
    yield put(emailVerified())
    yield put(setalert({text: user.message, color: 'success'}))
  } catch (e) {
    yield put(authError(e.message))
    yield put(setalert({text: e.message, color: 'error'}))
  }
}

function* forgetUser(action) {
  console.log(action);
  try {
    const user = yield call(forgetAPI, action.payload)
    yield put(emailVerified())
    yield put(setalert({ text: user.message, color: 'success' }))
  } catch (e) {
    yield put(authError(e.message))
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

function* logoutsaga() {
  yield takeEvery(ActionType.LOGOUT , logoutuser)
}

function* forgetSaga() {
  yield takeEvery(ActionType.FORGET_REQUSET, forgetUser)
}

export function* authsaga() {
  yield all([
    signupSaga(),
    loginSaga(),
    forgetSaga(),
    logoutsaga()
  ])
}

// export default mySaga