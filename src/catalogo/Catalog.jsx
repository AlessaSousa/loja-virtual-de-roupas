import React from "react";
import oversized from "../assets/png/oversized.jpg";
import bolsa from "../assets/png/bolsa.jpg";
import sobretudo from "../assets/png/sobretudo.jpg";
import socialfem from "../assets/png/socialfem.jpg";
import cuidadoscompele from "../assets/png/cuidadoscompele.png";
import cuidadospessoais from "../assets/png/cuidadospessoais.png";
import sabaoembarra from "../assets/png/sabaoembarra.png";
import logo from "../assets/png/logo.png";  // Logo
import nossocatalogo from "../assets/png/nossocatalogo.png";  // Banner
import "./Catalog.css";  // Importação do CSS

const products = [
  { id: 1, name: 'Oversized', image: oversized, price: 16.00 },
  { id: 2, name: 'Bolsa', image: bolsa, price: 16.00 },
  { id: 3, name: 'Sobretudo', image: sobretudo, price: 16.00 },
  { id: 4, name: 'Social Feminino', image: socialfem, price: 16.00 },
];

const Catalog = () => {
  return (
    <div className="catalog-container">
      {/* Cabeçalho com logo e barra de pesquisa */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#catalogo" className="nav-link">Catálogo</a>
          <a href="#categorias" className="nav-link">Categorias</a>
          <input type="text" placeholder="Buscar..." className="search-bar" />
          <button className="signup-button">Cadastro</button>
        </nav>
      </header>

      {/* Banner logo abaixo do cabeçalho */}
      <div className="banner-container">
        <img src={nossocatalogo} alt="Nosso Catálogo" className="banner" />
      </div>

      <h2>Catálogo</h2>
      <div className="catalog-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <div className="product-info">
              <span className="product-price">R${product.price.toFixed(2)}</span>
              <button className="buy-button">Comprar</button>
            </div>
          </div>
        ))}
      </div>

      {/* Texto entre os produtos e outras categorias */}
      <div className="categories-text">
        <p>Explore mais opções nas nossas categorias abaixo</p>
      </div>

      {/* Outras Categorias */}
      <div className="other-categories">
        <h2>OUTRAS CATEGORIAS</h2>
        <div className="category-images">
          <div className="category-item">
            <img src={cuidadoscompele} alt="Cuidados com a pele" className="category-image" />
            <button className="category-button">Cuidados com a pele</button>
          </div>
          <div className="category-item">
            <img src={cuidadospessoais} alt="Cuidados pessoais" className="category-image" />
            <button className="category-button">Cuidados pessoais</button>
          </div>
          <div className="category-item">
            <img src={sabaoembarra} alt="Sabão em barra" className="category-image" />
            <button className="category-button">Sabão em barra</button>
          </div>
        </div>
      </div>
      
      {/* Rodapé */}
      <footer className="footer">
        <p>© 2023 Loja Sustentável. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Catalog;
