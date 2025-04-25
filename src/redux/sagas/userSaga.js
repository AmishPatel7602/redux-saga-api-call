import axios from "axios";
import { toast } from "react-hot-toast";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_USER_REQUEST,
  createUserFailure,
  createUserSuccess,
  DELETE_USER_REQUEST,
  deleteUserFailure,
  deleteUserSuccess,
  FETCH_USERS_REQUEST,
  fetchUsersFailure,
  fetchUsersSuccess,
  UPDATE_USER_REQUEST,
  updateUserFailure,
  updateUserSuccess,
} from "../actions/userActions";

const fetchUsersApi = (page, limit) => {
  return axios.get(
    `https://api.escuelajs.co/api/v1/users?offset=${
      (page - 1) * limit
    }&limit=${limit}`
  );
};

const createUserApi = (userData) => {
  return axios.post("https://api.escuelajs.co/api/v1/users/", userData);
};

const deleteUserApi = (id) => {
  return axios.delete(`https://api.escuelajs.co/api/v1/users/${id}`);
};

const updateUserApi = (user) => {
  return axios.put(`https://api.escuelajs.co/api/v1/users/${user.id}`, user);
};

function* handleFetchUsers(action) {
  try {
    const { page, limit } = action.payload;
    const response = yield call(fetchUsersApi, page, limit);
    yield put(fetchUsersSuccess(response.data));
    toast.success("Users fetched successfully!");
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
    toast.error(`Failed to fetch users: ${error.message}`);
  }
}

function* handleCreateUser(action) {
  try {
    const response = yield call(createUserApi, action.payload);
    yield put(createUserSuccess(response.data));
    toast.success("User created successfully!");
  } catch (error) {
    yield put(createUserFailure(error.message));
    toast.error(`Failed to create user: ${error.message}`);
  }
}

function* handleDeleteUser(action) {
  try {
    yield call(deleteUserApi, action.payload);
    yield put(deleteUserSuccess(action.payload));
    toast.success("User deleted successfully!");
  } catch (error) {
    yield put(deleteUserFailure(error.message));
    toast.error(`Failed to delete user: ${error.message}`);
  }
}

function* handleUpdateUser(action) {
  try {
    const response = yield call(updateUserApi, action.payload);
    yield put(updateUserSuccess(response.data));
    toast.success("User updated successfully!");
  } catch (error) {
    yield put(updateUserFailure(error.message));
    toast.error(`Failed to update user: ${error.message}`);
  }
}

export default function* userSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, handleFetchUsers);
  yield takeLatest(CREATE_USER_REQUEST, handleCreateUser);
  yield takeLatest(DELETE_USER_REQUEST, handleDeleteUser);
  yield takeLatest(UPDATE_USER_REQUEST, handleUpdateUser);
}
