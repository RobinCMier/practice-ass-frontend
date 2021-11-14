//imports
import React, { useState, useEffect } from "react";

import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
//function
export  default function Storyform () {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit is being called")
    // dispatch(createPostForMe(title, content));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Title:
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Content:
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Image url:
            <input
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            ></input>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      {imgUrl != "" ? 
      <div>
      <p>Image preview:</p>
      <img src={imgUrl} alt="preview image" onLoading/>
      </div>
      : null}
      
    </div>
  );
};