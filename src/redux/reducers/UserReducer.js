import {
  FETCH_ERROR,
  LOGIN_SUCESS,
  LOGOUT_USER,
  START_FECTH,
} from "../actions/UserAction";
const localUser = localStorage.getItem("user");
const stateDefaut = {
  userLogin: localUser ? JSON.parse(localUser) : null,
  userSelected: {},
  lstUser: [],
  loading: false,
  message: "",
};
export const UserReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case FETCH_ERROR: {
      const { message } = action.data;
      return { ...state, message: message, loading: false };
    }
    case START_FECTH: {
      return { ...state, loading: true, message: "" };
    }
    case LOGOUT_USER: {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      state.message = "";
      state.userLogin = null;
      return { ...state };
    }
    case LOGIN_SUCESS: {
      const { accessToken, success, message, data } = action.data;
      if (success) {
        state.userLogin = data;
        state.loading = false;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(data));
        state.message = message;
        return { ...state };
      }
      return { ...state, message: message, loading: false };
    }
    default:
      return state;
  }
};
