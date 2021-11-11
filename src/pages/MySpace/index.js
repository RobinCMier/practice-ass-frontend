//imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
//components and function imports
import Storyform from "./Storyform";
import { selectUser, selectUserSpace } from "../../store/user/selectors";
import { selectToken } from "../../store/user/selectors";
import { deleteStory } from "../../store/user/actions";
//function
/*TO DO: Remove story button removes story from DB
V- make endpoint that on request removes story from DB (don't forget to re-migrate)
- make action that first requests the delete, then requests to fetch the updated info from DB
  to put in redux store => put in dispatch the id of space as spaceId in URL. 
- "/:spaceId/story/:storyId" -> you'll get the spaceId and storyId from mySpace as arguments. So wrap around thunk.
- you will get back an empty array as a response. do sth with conditional formatting.
- button OnClick dispatch this action. 
- Selector that is already here should do the updating already, but check this first.
TO DO:
TO DO: form to create a story
- make a component for the form, link it to index.
- make form HTML first to figure out what the input fields are gonna be
  we need:
  name
  content
  imageUrl
  spaceId
V- make POST endpoint to update user to create a new story and add to the right user DB, then send back ALL the DB as a response.
- plug JWT as middleware to first check if user is logged in. If no: shoot a message.
- make an action that sends post request to endpoint, then updates the store with response.
  FIRST dispatch a check if token is still valid, then if true, continue. If not 'session has expired pls log in'.
- //////when an imageUrl is filled in, a preview is instantly shown.
- If submit succesfull, display a message that form has been submitted, and a button to go back to myspace.
- myspace now contains the new story because selector.
*/
export default function MySpace() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser); //is an object
  const space = user.space; //object
  const spaceId = space.id;
  //so you can conditional format things depending if token is valid:
  const token = user.token; // string
  //toggle if button to edit space is clicked:
  // const [editMode, setEditMode] = useState(false);
  //toggle if button to poststory is clicked:
  const [postform, setpostform] = useState(false);
  console.log("what is user? ", user);
  console.log("what is space? ", space);
  console.log("what is token? ", token);
  console.log("what is spaceId? ", spaceId);
  const remove = (id) => {
    console.log("deleting story with this id ", id);
    dispatch(deleteStory(id));
  };
  useEffect(() => {
    if (token == null) {
      console.log("Myspace: There is no token");
      history.push("/");
    }
  }, [token, history]);
  //toggle seeing the buttons 'edit my space' and 'post a cool story' only if token is valid under your stories.
  //eventually it would be sexy if having either edit or post be true makes the stories invisible for oversight.

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
            {token ? (
              <div>
                <button>Edit your space!</button>
                <button onClick={() => setpostform(true)}>
                  Post a cool story bro
                </button>
              </div>
            ) : (
              ""
            )}
            {postform ? <Storyform /> : ""}
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
                      <button onClick={() => remove(story.id)}>
                        Remove this story
                      </button>
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
