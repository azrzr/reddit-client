import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router";
import { fetchThreads } from "../../features/threadsSlice";

const Subreddit = ({ subreddit, num }) => {
  const params = useParams();
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => {
        dispatch(fetchThreads(num));
      }}
    >
      <NavLink
        to={`subreddit/${subreddit}`}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        r/{subreddit}
      </NavLink>
    </li>
  );
};

export default Subreddit;
