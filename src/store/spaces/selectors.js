export default function selectSpaces(reduxState) {
  console.log("inside selector: ", reduxState.spaces);
  return reduxState.spaces.spaces; //array
}
export function selectOneSpace(reduxState) {
  const spaceDetails = reduxState.spaces.spaceDetails; //is an object
  console.log("these are spacedetails", spaceDetails);
  return spaceDetails; //is an object
}
