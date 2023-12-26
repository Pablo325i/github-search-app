import React from "react";
import QueryItem from "./QueryItem";

const QueriesList = ({ queries, deleteSelectedQuery }) => {
  console.log("result", queries);
  return (
    <ul>
      {queries.map((query) => (
        <QueryItem query={query} deleteSelectedQuery={deleteSelectedQuery} />
      ))}
    </ul>
  );
};

export default QueriesList;
