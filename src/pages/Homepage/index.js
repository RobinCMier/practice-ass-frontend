/* TO DO
- display
- make a link button that leads to details of page. 
- make pretty 
*/

//tool imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components and function imports
import selectSpace from "../../store/spaces/selectors";
import { fetchSpaces } from "../../store/spaces/actions";

export default function Homepage() {
  const dispatch = useDispatch();
  const allSpaces = useSelector(selectSpace);
  console.log("selectSpace space:", allSpaces); //returns array
  useEffect(() => {
    dispatch(fetchSpaces);
  }, []);
  //display: - spaces title and description, with button.

  return (
    <div>
      <h1>Spaces</h1>
      <div>
        {allSpaces.map((space) => {
          return (
            <div>
              <h2 key={space.id}>{space.title}</h2>
              <p>{space.description}</p>
              <button>Visit space</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
