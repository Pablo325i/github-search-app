// src/components/SearchResults.js
import React from "react";
import { useState } from "react";
const ResultItem = ({ result, onResultClick, onlyUsers }) => {
  console.log("result", result);

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const style = {
    backgroundColor: isHovered ? "blue" : "transparent",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      key={result?.id}
      onClick={() => onResultClick(result)}
    >
      {onlyUsers ? result?.login : result?.name} -{" "}
      {onlyUsers ? result?.id : result?.owner?.login}
    </li>
  );
};

export default ResultItem;
