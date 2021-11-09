//imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components and function imports
import { selectUserSpace } from "../../store/user/selectors";
//function
export default function MySpace() {
  // const dispatch = useDispatch();
  const userSpace = useSelector(selectUserSpace);
  console.log("from index: what is useSpace rn ", userSpace);
  // console.log("selectUserSpace from index:", userSpace); //returns
  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Welcome user, to your very own space!</h1>
        {!userSpace ? (
          "Loading space.."
        ) : (
          <div>
            <h2>{userSpace.title}</h2>
            <h3>{userSpace.description}</h3>
            <p>Your stories:</p>
            {userSpace.stories.map((story) => {
              return (
                <div key={story.id}>
                  <li>{story.name}</li>
                  <p>{story.content}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
