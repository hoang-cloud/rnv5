import { RETRIEVE_TOKEN, REGISTER, LOGIN, LOGOUT } from "../constants/index";

const initialState = {
  isLoading: true,
  userName: null,
  token: null,
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_TOKEN:
      return { ...state, isLoading: false, token: action.token };
    case LOGIN:
      return {
        ...state,
        isLoading: false,
        token: action.token,
        userName: action.id,
      };
    case LOGOUT:
      return { ...state, isLoading: false, token: null };
    case REGISTER:
      return {
        ...state,
        isLoading: false,
        token: action.token,
        userName: action.id,
      };
    default:
      return { ...state };
  }
};
