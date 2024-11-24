import React from "react";
import logo from "../assets/png/logo.png"; // Ajuste o caminho conforme necessário
import "./favorites.css";

const Favorites = () => {
  return (
    <div className="favorites-container">
      {/* Cabeçalho */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav">
          <a href="/">Home</a>
          <a href="/catalogo">Catálogo</a>
          <a href="/favorites">Favoritos</a>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar favoritos..."
            className="search-bar"
          />
          <button className="search-button">Buscar</button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="favorites-content">
        <h1>Seus Favoritos</h1>
        <p>Adicione itens aos seus favoritos para vê-los aqui.</p>
      </div>
    </div>
  );
};

export default Favorites;
