import React from "react";

const QueriesList = ({ queries, deleteSelectedQuery }) => {
  console.log("result", queries);
  return (
    <ul>
      {queries.map((query) => (
        <li key={query._id} onClick={() => deleteSelectedQuery(query)}>
          <p>ID: {query._id}</p>
          <p>Tipo de busqueda: {query.searchType}</p>
          {/* <p>{query.queryOptions}</p> */}
          <p>{query.q}</p>
          <p>Fecha: {query.date}</p>
        </li>
      ))}
    </ul>
  );
};

export default QueriesList;
