import React, { useEffect } from "react";
import "./MainContent.css";
import ItemsOutlet from "../ItemsOutlet/ItemsOutlet";
import { Outlet, useParams } from "react-router";

const MainContent = ({ searchParams }) => {
  let params = useParams();

  return (
    <div className="maincontent-container">
      {params.subredditId ? (
        <h2 className="subreddit-title">
          <span className="subreddit-r">r/</span>
          {params.subredditId}
        </h2>
      ) : (
        <h2 className="subreddit-title">
          Choose one of the <span className="subreddit-r">subreddits </span>on
          the right
        </h2>
      )}
      <Outlet />
    </div>
  );
};

export default MainContent;
