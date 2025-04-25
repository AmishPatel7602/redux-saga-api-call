export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginRequest = (payload) => ({ type: LOGIN_REQUEST, payload });
export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
export const logout = () => ({ type: LOGOUT });
