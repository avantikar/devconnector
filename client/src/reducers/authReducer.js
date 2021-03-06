//import { GET_ERRORS } from "../actions/types";
import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  isVerified: false,
  user: {}
};

export default function(state = initialState, action) {
  //debugger;
  switch (action.type) {
    //case GET_ERRORS:
    //return action.payload;
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
