import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/authActions";

const initialState = {
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      return { ...state, loading: false, token: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, token: null };
    default:
      return state;
  }
};

export default authReducer;
