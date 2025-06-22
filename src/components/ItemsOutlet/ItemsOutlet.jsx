import React from "react";
import ContentItem from "../ContentItem/ContentItem";
import { useSelector } from "react-redux";
import "./ItemsOutlet.css";

const ItemsOutlet = () => {
  const threadsState = useSelector((state) => state.threads);
  return (
    <>
      {threadsState.loading ? (
        <h2 className="loading-text">Loading... Please wait...</h2>
      ) : (
        threadsState.data.map((thread, index) => {
          return <ContentItem key={thread.id} index={index} />;
        })
      )}
    </>
  );
};

export default ItemsOutlet;
