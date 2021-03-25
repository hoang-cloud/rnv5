import { REGISTER, RETRIEVE_TOKEN, LOGIN, LOGOUT, FETCH_USER, INCREMENT, DECREMENT } from "../constants/index";

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

export function increment(){
  return (dispatch) => {
    dispatch({type: INCREMENT})
  }
}
export function decrement(){
  return (dispatch) => {
    dispatch({type: DECREMENT})
  }
}

export function fetchUser(data){
  return(dispatch) => {
    dispatch({type: FETCH_USER, data})
  }
}