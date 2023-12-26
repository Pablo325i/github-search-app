// src/components/SearchResults.js
import React from "react";
import { useState } from "react";
import ResultItem from "./ResultItem";
const ResultList = ({ results, onResultClick, onlyUsers }) => {
  return (
    <ul>
      {results.map((result) => (
        <ResultItem
          result={result}
          onResultClick={onResultClick}
          onlyUsers={onlyUsers}
        />
      ))}
    </ul>
  );
};

export default ResultList;
