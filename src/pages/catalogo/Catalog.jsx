import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ItensCatalago from "../itensCatalago/ItensCatalago";
import Filter from "../filter/Filter";
import nossocatalogo from "../../assets/png/nossocatalogo.png";
import "./Catalog.css";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["Feminino", "Masculino", "Infantil", "Esporte"];

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="catalog-container">
      <Header />
      <div className="banner-container">
        <img src={nossocatalogo} alt="Nosso Catálogo" className="banner" />
      </div>

      <Filter categories={categories} onFilterChange={handleFilterChange} />

      <ItensCatalago selectedCategory={selectedCategory} />

      <Footer />
    </div>
  );
};

export default Catalog;