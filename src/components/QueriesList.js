import React from "react";

const QueriesList = ({ queries, onResultClick }) => {
  console.log("result", queries);
  return (
    <ul>
      {queries.map((query) => (
        <li key={query._id} onClick={() => onResultClick(query)}>
          <p>{query._id}</p>
          <p>{query.searchType}</p>
          {/* <p>{query.queryOptions}</p> */}
          <p>{query.q}</p>
          <p>{query.date}</p>
        </li>
      ))}
    </ul>
  );
};

export default QueriesList;
