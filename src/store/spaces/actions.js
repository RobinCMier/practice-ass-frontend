/* TO DO:
Fetch the data from API, put it in store
- make a thunk with a get request to get the data from API
- make a startLoading action creator
- make a putting posts in action creator 
*/
//imports
import axios from "axios";
//action creators
// export function nameFunction(parameter){
//     return{
//         type:"slice/whatUWannaDoInReducer",
//         payload: ifYouNeed
//     }
// }
export function startLoading() {
  return {
    type: "spaces/startLoading",
  };
}
export function spacesAdded(data) {
  console.log("action creator, data: ", data);
  return {
    type: "spaces/spacesAdded",
    payload: data,
  };
}

//THUNKs
const API_URL = "http://localhost:4000/spaces";

export async function fetchSpaces(dispatch, getState) {
  dispatch(startLoading);
  const res = await axios.get(API_URL);
  console.log("actions data spaces: ", res.data); //is array with spaces as objects
  dispatch(spacesAdded(res.data));
}
