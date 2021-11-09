/* TO DO
- fix the extra when rerendering. Offset?
- make pretty 
*/

//tool imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components and function imports
import selectSpace from "../../store/spaces/selectors";
import { fetchSpaces } from "../../store/spaces/actions";

export default function Homepage() {
  const dispatch = useDispatch();
  const allSpaces = useSelector(selectSpace);
  console.log("selectSpace space:", allSpaces); //returns array
  useEffect(() => {
    dispatch(fetchSpaces);
  }, [dispatch]);

  return (
    <div>
      <h1>Spaces</h1>
      <div>
        {allSpaces.map((space) => {
          return (
            <div>
              <h2 key={space.id}>{space.title}</h2>
              <p>{space.description}</p>
              <Link to={`/spaces/${space.id}`}>
                <button>Visit space</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
