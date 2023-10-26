// src/components/ResultDetail.js
import React from "react";

const ResultDetail = ({ result, onBack }) => {
  return (
    <div>
      <h2>{result.name}</h2>
      <p>Descripción: {result.description}</p>
      <p>Estrellas: {result.stargazers_count}</p>
      <button onClick={onBack}>Volver a los resultados</button>
    </div>
  );
};

export default ResultDetail;
