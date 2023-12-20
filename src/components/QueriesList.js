import React from "react";

const QueriesList = ({ queries, onResultClick }) => {
  console.log("result", queries);
  return (
    <ul>
      {queries.map((query) => (
        <li key={query._id} onClick={() => onResultClick(query)}>
          <p>{query._id}</p>
          <p>{query._searchType}</p>
          <p>{query._queryOptions}</p>
          <p>{query._q}</p>
          <p>{query._date}</p>
        </li>
      ))}
    </ul>
  );
};

export default QueriesList;
