/*TO DO
- Order the stories from new to old
- CSS
V- Clicking on button in homepage brings us here. 
V- route is /spaces/:id
V- get params for id
V- THUNK: get params, space findbypk, incl stories
V- put data in store
V- with selector display space and stories
*/

//tool imports
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//components and actions
import { fetchOneSpaceStories } from "../../store/spaces/actions";
import { selectOneSpace } from "../../store/spaces/selectors";
//function

export default function Detailpage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneSpaceStories(id));
  }, [dispatch, id]);
  const oneSpace = useSelector(selectOneSpace); //is an object

  console.log(id);
  return (
    <div>
      {!oneSpace ? (
        "Loading.."
      ) : (
        <div>
          <h1>{oneSpace.title}</h1>
          {oneSpace.stories.map((story) => {
            return (
              <div key={story.id}>
                <h2>{story.name}</h2>
                <img
                  src={story.imageUrl}
                  alt="something that symbolizes the story"
                  style={({ width: "500px" }, { height: "250px" })}
                />
                <p>{story.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
