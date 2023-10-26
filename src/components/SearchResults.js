// src/components/SearchResults.js
import React from "react";

const SearchResults = ({ results, onResultClick }) => {
  console.log("result", results);
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id} onClick={() => onResultClick(result)}>
          {result.name} - {result.owner.login}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
