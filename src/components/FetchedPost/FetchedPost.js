import React from "react";
import "./FetchedPost.scss";
import { Link } from "react-router-dom";

export default function FetchedPost(props) {
  const { title, body, id } = props.data;
  return (
    <div>
      <div className="post">
        <div className="post-header">
          <div className="button-top">I Do Reflect</div>
        </div>
        <span className="date">Sep 11</span>
        <div className="post-main">
          <h1>{title}</h1>
          <p className="main-text">{body}</p>
        </div>
        <div className="bottom-section">
          <div className="read-more">
            <Link to={`/${id}`}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
