import { IMAGE_UPLOADED } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case IMAGE_UPLOADED:
      return {
        ...state,
      };

    default:
      return state;
  }
}
