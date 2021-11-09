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
            <strong>{userSpace.description}</strong>
            <br />
            <p>Your stories:</p>
            <button>Add a story!</button>
            {userSpace.stories.map((story) => {
              return (
                <div key={story.id}>
                  <h3>{story.name}</h3>
                  <img
                    src={story.imageUrl}
                    alt="some motivation"
                    style={({ width: "500px" }, { height: "250px" })}
                  />
                  <p>{story.content}</p>
                  <button>Remove this story</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
