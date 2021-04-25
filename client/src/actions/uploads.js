import axios from "axios";
import { IMAGE_UPLOADED } from "./types";

// Upload Image
export const uploadImage = (data) => (dispatch) => {
  debugger;
  // dispatch(setProfileLoading());
  axios
    .post("/upload", data)
    .then((res) => {
      debugger;
      console.log("res.json()" + res.json());
      dispatch({
        type: IMAGE_UPLOADED,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: IMAGE_UPLOADED,
        payload: {},
      })
    );
};
