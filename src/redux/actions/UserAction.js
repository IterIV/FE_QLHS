import { userService } from "../../services/userService";
export const START_FECTH = "START_FECTH";
export const FETCH_ERROR = "FETCH_ERROR";
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGOUT_USER = "LOGOUT_USER";
const startFetch = () => ({
  type: START_FECTH,
});
const fectError = (data) => ({
  type: FETCH_ERROR,
  data: data,
});
export const logoutAction = () => ({ type: LOGOUT_USER });
export const loginAction = (user) => {
  startFetch();
  return (dispatch) => {
    userService
      .login(user)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: LOGIN_SUCESS,
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        fectError(error.response.data);
      });
  };
};
