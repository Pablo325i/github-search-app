// src/components/SearchResults.js
import React from "react";

const ResultList = ({ results, onResultClick, onlyUsers }) => {
  console.log("result", results);
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id} onClick={() => onResultClick(result)}>
          {onlyUsers ? result.login : result.name} -{" "}
          {onlyUsers ? result.id : result?.owner?.login}
        </li>
      ))}
    </ul>
  );
};

export default ResultList;
