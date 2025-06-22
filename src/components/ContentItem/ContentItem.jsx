import React, { useState } from "react";
import "./ContentItem.css";
import Comment from "../Comment/Comment";
import { useSelector } from "react-redux";
import TimeAgo from "react-timeago";
import Markdown from "react-markdown";

const ContentItem = ({ index }) => {
  const [commentsToggle, setCommentsToogle] = useState(0);
  const [voteToggle, setVoteToggle] = useState(0);

  const threadsState = useSelector((state) => state.threads.data);

  const voteHandler = (vote) => {
    if (voteToggle === 0) {
      vote === 1 ? setVoteToggle(1) : setVoteToggle(-1);
    } else if (voteToggle === 1) {
      vote === 1 ? setVoteToggle(0) : setVoteToggle(-1);
    } else if (voteToggle === -1) {
      vote === 1 ? setVoteToggle(1) : setVoteToggle(0);
    }
  };

  return (
    <div className="content-item-container">
      <div className="content-item-firstline">
        <img
          src="https://styles.redditmedia.com/t5_2tqnh/styles/communityIcon_xgyqt9ik2c8b1.jpg?format=pjpg&s=5f35426ed93752386d76399ff852d641c956ae02"
          alt="Subreddit logo"
          className="content-item-logo"
        />
        <span className="dot">•</span>
        {threadsState[index].author}
        <span className="dot">•</span>
        <TimeAgo date={threadsState[index].created * 1000} />
      </div>

      <div className="content-item-title">
        <h3 className="post-title">
          <a href={`https://reddit.com/${threadsState[index].permalink}`}>
            {threadsState[index].title}
          </a>
        </h3>
        <p className="post-text">{threadsState[index].selftext}</p>
      </div>

      <div className="content-item-bottomline">
        <div className="content-item-vote">
          <div
            className={`content-item-votebutton upvote ${
              voteToggle === 1 ? "active" : ""
            }`}
            onClick={() => voteHandler(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          </div>
          <div className="content-item-vote-score">
            {threadsState[index].ups - threadsState[index].downs}
          </div>
          <div
            className={`content-item-votebutton downvote ${
              voteToggle === -1 ? "active" : ""
            }`}
            onClick={() => voteHandler(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
              />
            </svg>{" "}
          </div>
        </div>
        <div
          className={`content-item-comment-btn ${
            commentsToggle === 1 ? "active" : ""
          }`}
          onClick={() => {
            commentsToggle === 1 ? setCommentsToogle(0) : setCommentsToogle(1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chat-right-text"
            viewBox="0 0 16 16"
          >
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
          </svg>
          {threadsState[index].num_comments}
        </div>
      </div>

      {commentsToggle === 1 ? (
        <div className="content-item-comments-section">
          <h4 className="content-item-comments-section-header">Comments</h4>
          <Comment />
          <Comment />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ContentItem;
