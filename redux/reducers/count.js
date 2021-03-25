import { INCREMENT, DECREMENT } from '../constants/index';

const initialState = { count: 0 };
export const count = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("da tang")
      return { count: state.count + 1 };
    case DECREMENT:
    console.log("giam")
      return { count: state.count - 1 };
    default:
      return { ...state };
  }
};
