import React from "react";
import "./Comment.css";
import { useSelector } from "react-redux";
import TimeAgo from "react-timeago";

const Comment = ({ threadIndex, index }) => {
  const commentState = useSelector(
    (state) => state.threads.data[threadIndex].comments.data[index]
  );

  return (
    <div className="comment-container">
      <div className="comment-firstline">
        u/{commentState.author}
        <span className="dot">•</span>
        <TimeAgo date={commentState.created_utc * 1000} />
      </div>
      <div className="comment-content">{commentState.body}</div>
    </div>
  );
};

export default Comment;
