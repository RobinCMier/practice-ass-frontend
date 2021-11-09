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

//misc
const API_URL = "http://localhost:4000/spaces";

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
export function oneSpaceAdded(data) {
  console.log("action creator oneSpace, data: ", data);
  return {
    type: "spaces/oneSpaceAdded",
    payload: data,
  };
}

//THUNKs
//get all spaces

export async function fetchSpaces(dispatch, getState) {
  dispatch(startLoading);
  try {
    const res = await axios.get(API_URL);
    console.log("actions data spaces: ", res.data); //is array with spaces as objects
    dispatch(spacesAdded(res.data));
  } catch (e) {
    console.log(`Something went wrong in fetchSpaces: ${e}`);
  }
}

//get space by id and also all its stories
export function fetchOneSpaceStories(id) {
  console.log("function fetchOnespace is called");
  return async function thunk(dispatch, getState) {
    dispatch(startLoading);
    try {
      console.log(`${API_URL}${id}`);
      const res = await axios.get(`${API_URL}/${id}`);
      console.log(res.data);
      dispatch(oneSpaceAdded(res.data));
    } catch (e) {
      console.log(`Something went wrong at fetchOneSpace: ${e}`);
    }
  };
}
