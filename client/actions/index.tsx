import { TEST } from "./types";
import axios from "axios";

export const test = () => async dispatch => {
  const res = await axios.request(
    "https://jsonplaceholder.typicode.com/posts",
    { method: "get" }
  );
  return new Promise(resolve => {
    dispatch({ type: TEST, data: res.data });
    resolve(res.data);
  });
};
