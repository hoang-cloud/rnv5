import { REGISTER, RETRIEVE_TOKEN, LOGIN, LOGOUT } from "../constants/index";

export function signIn(userName, password) {
  return (dispatch) => {
    let token;
    if (userName === "user" && password === "password") {
      token = "xxx";
    }
    console.log(token);
    dispatch({ type: LOGIN, token: token, id: userName });
  };
}

export function signOut() {
  return (dispatch) => {
    dispatch({ type: LOGOUT, token: null });
  };
}
