import { FETCH_USER } from '../constants/index';

const initialState = [];
export const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return state.concat(action.data)
    default:
      return [...state]
  }
};
