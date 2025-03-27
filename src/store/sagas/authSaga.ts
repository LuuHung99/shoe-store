import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "../slices/authSlice";
import { login } from "../../services/authService";

function* handleLogin(action: ReturnType<typeof loginRequest>) {
  try {
    const response = yield call(login, action.payload);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
