import { useState } from "react";
const QueryItem = ({ query, deleteSelectedQuery }) => {
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
      key={query._id}
      onClick={() => deleteSelectedQuery(query)}
    >
      <p>ID: {query._id}</p>
      <p>Tipo de busqueda: {query.searchType}</p>
      {/* <p>{query.queryOptions}</p> */}
      <p>{query.q}</p>
      <p>Fecha: {query.date}</p>
    </li>
  );
};
export default QueryItem;
