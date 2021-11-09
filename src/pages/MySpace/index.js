//imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
//components and function imports
import { selectUser, selectUserSpace } from "../../store/user/selectors";
import { selectToken } from "../../store/user/selectors";
//function
export default function MySpace() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser); //is an object
  const space = user.space; //object
  const token = user.token; // string
  console.log("what is user? ", user);
  console.log("what is space? ", space);
  console.log("what is token? ", token);
  useEffect(() => {
    if (token == null) {
      console.log("Myspace: There is no token");
      history.push("/");
    }
  }, [token, history]);

  return (
    <div>
      <div>
        <h1>Welcome user, to your very own space!</h1>
        {!space ? (
          "Loading space.."
        ) : (
          <div>
            <h2>{space.title}</h2>
            <strong>{space.description}</strong>
            <br />
            <p>Your stories:</p>
            <button>Add a story!</button>
            {!space.stories ? (
              "You don't have stories yet!"
            ) : (
              <div>
                {space.stories.map((story) => {
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
        )}
      </div>
    </div>
  );
}
