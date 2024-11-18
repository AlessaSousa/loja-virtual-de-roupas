import React from "react";
import "./Filter.css";

const Filter = ({ categories, onFilterChange }) => {
  return (
    <div className="filter-container mb-6">
      <select 
        onChange={(e) => onFilterChange(e.target.value)} 
        className="filter-dropdown"
        aria-label="Filtrar por categoria"
      >
        <option value="">Todas as categorias</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
