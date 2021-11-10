//imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
//components and function imports
import { selectUser, selectUserSpace } from "../../store/user/selectors";
import { selectToken } from "../../store/user/selectors";
//function
/*TO DO: Remove story button removes story from DB
- make endpoint that on request removes story from DB (don't forget to re-migrate)
- make action that first requests the delete, then requests to fetch the updated info from DB
  to put in redux store => put in dispatch the id of space as spaceId in URL. 
- "/:spaceId/story/:storyId" -> you'll get the spaceId and storyId from mySpace as arguments. So wrap around thunk.
- you will get back an empty array as a response. do sth with conditional formatting.
- button OnClick dispatch this action. 
- Selector that is already here should do the updating already, but check this first.

*/
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
            <button>Post a cool story bro</button>
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
