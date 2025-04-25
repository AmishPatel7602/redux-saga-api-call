import axios from "axios";
import { toast } from "react-hot-toast";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  loginFailure,
  loginSuccess,
} from "../actions/authActions";

function loginApi(credentials) {
  return axios.post("https://api.escuelajs.co/api/v1/auth/login", credentials);
}

function* handleLogin(action) {
  try {
    const response = yield call(loginApi, action.payload);
    const userData = response.data;
    yield put(loginSuccess(userData));
    localStorage.setItem("token", userData.access_token);
    toast.success("Login successful!");
    window.location.href = "/home";
  } catch (error) {
    yield put(loginFailure(error.message));
    toast.error(`Login failed: ${error.message}`);
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}
