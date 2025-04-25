export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const fetchUsersRequest = (page = 1, limit = 10) => ({
  type: FETCH_USERS_REQUEST,
  payload: { page, limit },
});
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const createUserRequest = (userData) => ({
  type: CREATE_USER_REQUEST,
  payload: userData,
});
export const createUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
});
export const createUserFailure = (error) => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

export const deleteUserRequest = (id) => ({
  type: DELETE_USER_REQUEST,
  payload: id,
});
export const deleteUserSuccess = (id) => ({
  type: DELETE_USER_SUCCESS,
  payload: id,
});
export const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: error,
});

export const updateUserRequest = (user) => ({
  type: UPDATE_USER_REQUEST,
  payload: user,
});
export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});
export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});
