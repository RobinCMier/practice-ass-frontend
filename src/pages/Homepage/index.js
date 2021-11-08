// add display
// plug a route in app.js
// set up a spaces slice in store
// thunk action to fetch spaces
// useffect to dispatch thunk
// console everything
// case in store

//tool imports
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//components and function imports
import { fetchSpaces } from "../../store/spaces/actions";

export default function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpaces);
  }, [dispatch]);

  return <div>Hello there from Homepage</div>;
}
